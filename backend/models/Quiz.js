const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  scamType: { type: mongoose.Schema.Types.ObjectId, ref: "ScamType", required: true },
  questions: [
    {
      question: String,
      options: [String],
      answer: String,
      explanation: String
    }
  ],
});

module.exports = mongoose.model("Quiz", QuizSchema);

