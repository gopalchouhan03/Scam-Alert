const mongoose = require("mongoose");

const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/scam-alert");
console.log("✅ MongoDB Connected Successfully");
} catch (err) {
console.error("❌ MongoDB connection failed:", err.message);
process.exit(1);
}
};

module.exports = connectDB;
