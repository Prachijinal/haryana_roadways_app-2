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

busSchema.index(
  {
    source: 1,
    destination: 1,
    via: 1,
    departureTime: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model("Bus", busSchema);