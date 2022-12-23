const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  lectureName: {
    type: String,
    required: true,
  },
  lecturer: {
    type: String,
    required: true,
  },
  lectureCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("lectures", lectureSchema);