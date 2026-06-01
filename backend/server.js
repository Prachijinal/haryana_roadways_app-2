require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


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

app.get("/", (req, res) => {
  res.send("Haryana Roadways Backend Running");
});

app.get("/api/buses", (req, res) => {
  res.json(buses);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
