const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: String,
    required: true,
  },
  file:{
    type:String,
  },
  lecture:{
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Assignment", assignmentSchema);