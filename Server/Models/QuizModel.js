const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    option1: {
      type: String,
      required: true,
    },
    option2: {
      type: String,
      required: true,
    },
    option3: {
      type: String,
      required: true,
    },
    option4: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    correct: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuizModel = mongoose.model("questions", QuizSchema);

module.exports = QuizModel;
