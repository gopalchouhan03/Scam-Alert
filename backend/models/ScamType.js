const mongoose = require("mongoose");

const ScamTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
});

module.exports = mongoose.model("ScamType", ScamTypeSchema);

