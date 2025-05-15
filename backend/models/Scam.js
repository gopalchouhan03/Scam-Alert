const mongoose = require("mongoose");

const scamSchema = new mongoose.Schema({
title: {
type: String,
required: true,
},
description: String,
location: String,
reportedBy: {
type: mongoose.Schema.Types.ObjectId,
ref: "User", // If you associate with a user model
},
createdAt: {
type: Date,
default: Date.now,
},
});

const Scam = mongoose.model("Scam", scamSchema);
module.exports = Scam;