require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Bus = require("./models/Bus");

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

app.get("/", (req, res) => {
  res.send("Haryana Roadways Backend Running");
});

app.get("/api/buses", async (req, res) => {
  try {
    const buses = await Bus.find();

    res.status(200).json(buses);
  } catch (error) {
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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
