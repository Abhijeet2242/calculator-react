const mongoose = require("mongoose");

const calculatorDataSchema = new mongoose.Schema({
  calculation: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CalculatorData = mongoose.model("CalculatorData", calculatorDataSchema);

module.exports = CalculatorData;
