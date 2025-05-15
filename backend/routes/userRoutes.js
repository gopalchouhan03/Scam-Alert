const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// POST /api/users/signup
router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "Email already in use" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// LOGIN Route
router.post("/login", async (req, res) => {
    const { fullName, password } = req.body;

    try {
        const user = await User.findOne({ fullName });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid password" });
        }

        // Successful login
        res.status(200).json({ message: "Login successful", user: { fullName: user.fullName, email: user.email } });
    } catch (err) {
        res.status(500).json({ error: "Server error: " + err.message });
    }
});

module.exports = router;