const mongoose = require("mongoose");

const PreventionTipSchema = new mongoose.Schema({
  scamType: { type: mongoose.Schema.Types.ObjectId, ref: "ScamType", required: true },
  tips: [String],
});

module.exports = mongoose.model("PreventionTip", PreventionTipSchema);

