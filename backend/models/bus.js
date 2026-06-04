const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  via: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bus", busSchema);