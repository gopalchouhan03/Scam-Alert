// routes/scamReports.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const ScamReport = require('../models/ScamReport');

// POST /api/scams
router.post('/', upload.array('attachments'), async (req, res) => {
  try {
    const { scamType, description, email, anonymous } = req.body;

    const filePaths = req.files.map(file => file.path) || [];

    const report = new ScamReport({
      scamType,
      description,
      email: anonymous === 'true' ? undefined : email,
      anonymous: anonymous === 'true',
      attachments: filePaths
    });

    await report.save();

    res.status(201).json({ message: 'Scam reported successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit report.' });
  }
});

module.exports = router;
