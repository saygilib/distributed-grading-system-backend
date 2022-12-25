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
  file: {
    type: String,
  },
  lecture: {
    type: String,
    required: true,
  },
  uploads: [
    {
      studentId: {
        type: String,
      },
      path: {
        type: String,
      },
      reviews: [
        {
          reviewerId: {
            type: String,
          },
          review: {
            type: String,
          },
          score:{
            type: Number,
          }
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Assignment", assignmentSchema);
