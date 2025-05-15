// models/ScamReport.js
const mongoose = require('mongoose');

const scamReportSchema = new mongoose.Schema({
  scamType: { type: String, required: true },
  description: { type: String, required: true },
  attachments: [{ type: String }], // store file paths
  email: { type: String },
  anonymous: { type: Boolean, default: false },
  submittedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('ScamReport', scamReportSchema);
