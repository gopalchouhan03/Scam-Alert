// index.js
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db/db");
const cors = require("cors");
require("dotenv").config();



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

connectDB(); 

// Start server
app.listen(5000, () => {
console.log("Server running on http://localhost:5000");
});

// DB connection
mongoose
.connect(process.env.MONGODB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Example route
app.get("/", (req, res) => {
res.send("API is working");
});


// Routes
const scamRoutes = require("./routes/scamRoutes");
app.use("/api/scams", scamRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const preventionRoutes = require("./routes/preventionTips.js");
app.use('/api/prevention', preventionRoutes);