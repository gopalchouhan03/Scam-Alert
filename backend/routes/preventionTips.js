const express = require("express");
const PreventionTip = require("../models/PreventionTip.js");
const ScamType = require("../models/ScamType.js");
const Quiz = require("../models/Quiz.js");


const router = express.Router();

// Get all prevention tips
router.get("/", async (req, res) => {
  try {
    const tips = await PreventionTip.find().populate("scamType");
    res.json(tips);
  } catch (err) {
    console.error('Error fetching prevention tips:', err);
    res.status(500).json({ error: "Server error" });
  }
});

// Search prevention tips by scam type
router.get("/type/:scamType", async (req, res) => {
  try {
    const scamTypeName = decodeURIComponent(req.params.scamType);
    const type = await ScamType.findOne({ name: scamTypeName });

    if (!type) {
      console.log("Scam type not found for:", scamTypeName);
      return res.status(404).json({ error: "Scam type not found" });
    }

    const tips = await PreventionTip.find({ scamType: type._id }).populate("scamType");
    res.json(tips);
  } catch (err) {
    console.error("Error fetching tips by type:", err);
    res.status(500).json({ error: "Server error" });
  }
});


// Get quiz by scam type
router.get("/quiz/:scamType", async (req, res) => {
  try {
    const scamTypeName = req.params.scamType;

    // Case-insensitive match for scam type name
    const type = await ScamType.findOne({
      name: { $regex: new RegExp("^" + scamTypeName + "$", "i") }
    });

    if (!type) {
      return res.status(404).json({ error: "Scam type not found" });
    }

    // Find quiz by scamType ObjectId
    const quiz = await Quiz.findOne({ scamType: type._id });
    // console.log("ScamType found:", type);

    if (!quiz) {
      return res.status(404).json({ error: "Quiz for this scam type not found" });
    }

    res.json(quiz);
  } catch (err) {
    console.error("Error fetching quiz:", err);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
