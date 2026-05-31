const express = require("express");
const cors = require("cors");
const buses = require("./data/buses");

const app = express();

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