const mongoose = require("mongoose");
const ScamType = require("../models/ScamType");  // Adjust path
const Quiz = require("../models/Quiz");  // Adjust path

async function updateQuizzes() {
  try {
    // Connect to your database
    await mongoose.connect("mongodb://localhost:27017/scam-alert", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // List of all scam types
    const scamTypes = await ScamType.find();

    for (let scamType of scamTypes) {
      const quizzes = await Quiz.find({ "scamType": { $ne: scamType._id } });

      // Update quizzes that are not linked to this scam type
      for (let quiz of quizzes) {
        quiz.scamType = scamType._id;
        await quiz.save();
        console.log(`Updated Quiz: ${quiz._id} to scamType: ${scamType.name}`);
      }
    }

    console.log("Update complete.");
  } catch (err) {
    console.error("Error updating quizzes:", err);
  } finally {
    mongoose.connection.close();
  }
}

updateQuizzes();
