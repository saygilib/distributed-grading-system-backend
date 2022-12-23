const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: { type: Number, default: 1, required: true },
  studentId: {
    type: Number,
  },
  lectures:[{
    type: String,
  }]
});

module.exports = mongoose.model("users",userSchema)