const express = require("express");
const buses = require("./data/buses");

const app = express();

app.get("/", (req, res) => {
  res.send("Haryana Roadways Backend Running");
});

app.get("/api/buses", (req, res) => {
  res.json(buses);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});