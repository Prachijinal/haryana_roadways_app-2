require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Bus = require("./models/Bus");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");

console.log(pdfParse);

console.log("Bus Model:", Bus);
console.log("Type:", typeof Bus);

console.log(require("./models/Bus"));

const app = express();
console.log(process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

console.log("INSIDE GET");
console.log("Bus:", Bus);
console.log("typeof Bus:", typeof Bus);
console.log("Bus.find:", Bus.find);


app.get("/", (req, res) => {
  res.send("Haryana Roadways Backend Running");
});

app.get("/api/buses", async (req, res) => {
  try {
    const buses = await Bus.find();

    res.status(200).json(buses);
  } catch (error) {
    console.log("GET BUSES ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/api/buses", async (req, res) => {
  try {
    const bus = new Bus(req.body);

    const savedBus = await bus.save();

    res.status(201).json(savedBus);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.delete("/api/buses/:id", async (req, res) => {
  try {
    const deletedBus = await Bus.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedBus);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/api/upload-pdf", upload.single("pdf"), async (req, res) => {
  try {

    console.log("Upload route hit");



    const dataBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdfParse(dataBuffer);

    console.log(pdfData.text);

    // const bus = new Bus({
    // source: "AMBALA",
    // destination: "CHANDIGARH",
    // departureTime: "02:01",
    // });

    //await bus.save();

    //console.log("Test Bus Saved");

    const lines = pdfData.text.split("\n");

    console.log(lines.slice(0, 20));

    const busLines = lines.filter((line) =>
      /\d{2}:\d{2}/.test(line)
    );

    console.log(busLines.slice(0, 5));

    const cities = [
      "CHANDIGARH",
      "DELHI",
      "KARNAL",
      "GURUGRAM",
      "FARIDABAD",
      "PANIPAT",
      "ROHTAK",
      "HISAR",
      "AMBALA",
    ];

    let savedCount = 0;

    for (const line of busLines) {

      const timeMatch = line.match(/\d{2}:\d{2}/);

      if (!timeMatch) continue;

      const beforeTime = line.split(timeMatch[0])[0];

      const foundCities = cities.filter((city) =>
        beforeTime.includes(city)
      );

      console.log("Cities Found:", foundCities);

      if (foundCities.length < 3) {
        continue;
      }

      const bus = new Bus({
        source: foundCities[0],
        destination: foundCities[1],
        via: foundCities[2],
        departureTime: timeMatch[0],
      });

      await bus.save();

      savedCount++;

      console.log(
        `Saved Bus ${savedCount}: ${foundCities[0]} -> ${foundCities[1]}`
      );
    }

    console.log(`Total Saved: ${savedCount}`);


    res.status(200).json({
      message: "PDF Uploaded Successfully",
    });
  } catch (error) {
    console.log("PDF ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
