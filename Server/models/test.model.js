const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
  {
    title: String,
    class: Number,
    subject: String,
    type: String,
    creator: String,
    fileUrl: String,
    fileType: String,
    thumbnailUrl: String,
    size: String,
    question: String,
    options: Array,
    correctAnswer: String,
  },
  { versionKey: false, timestamps: true }
);

const TestModel = mongoose.model("test", testSchema);

module.exports = { TestModel };
