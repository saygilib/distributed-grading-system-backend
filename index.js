const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const bodyparser = require("body-parser");
app.use(bodyparser.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/distributed-sys-db", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => {console.log("connected to database");})

const adminRoutes = require("./routes/adminRoutes");
const lecturerRoutes = require("./routes/lecturerRoutes");
const profileRoutes = require("./routes/profileRoutes");
const signRoutes = require("./routes/signRoutes");
const studentRoutes = require("./routes/studentRoutes");
const lectureRoutes = require("./routes/lectureRoutes");

app.use(adminRoutes);
app.use(lecturerRoutes);
app.use(profileRoutes);
app.use(signRoutes);
app.use(studentRoutes);
app.use(lectureRoutes);
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
