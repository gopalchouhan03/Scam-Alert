// routes/scamRoutes.js
const express = require("express");
const router = express.Router();
const Scam = require("../models/Scam");
const upload = require("../middleware/upload");
const ScamReport = require("../models/ScamReport");


// POST: Add a new scam
router.post("/", upload.array("attachments"), async (req, res) => {
  try {
    console.log("Incoming form data:", req.body);
    console.log("Uploaded files:", req.files);

    const { scamType, description, email, anonymous } = req.body;

    if (!scamType || !description) {
      console.warn("⚠️ Required fields missing");
      return res.status(400).json({ error: "Scam type and description are required." });
    }

    const filePaths = req.files?.map(file => file.path) || [];

    const report = new ScamReport({
      scamType,
      description,
      email: anonymous === "true" ? undefined : email,
      anonymous: anonymous === "true",
      attachments: filePaths,
    });

    const saved = await report.save();
    console.log("Saved to DB:", saved);

    res.status(201).json({ message: "Scam reported successfully." });
  } catch (error) {
    console.error("Error saving to DB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET: List all scams
router.get("/", async (req, res) => {
  try {
    const { search, sort = "desc", scamType } = req.query;

    const query = {};
    if (search) {
      query.$or = [
        { description: { $regex: search, $options: "i" } },
        { scamType: { $regex: search, $options: "i" } },
      ];
    }

    if (scamType) {
      query.scamType = scamType;
    }

    const scams = await ScamReport.find(query).sort({ createdAt: sort === "asc" ? 1 : -1 });
    res.json(scams);
  } catch (err) {
    console.error("Error fetching scams:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/scams/:id
router.get("/:id", async (req, res) => {
  try {
    const scam = await ScamReport.findById(req.params.id);
    if (!scam) return res.status(404).json({ message: "Scam not found" });
    res.json(scam);
  } catch (err) {
    console.error("Error fetching scam:", err);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;