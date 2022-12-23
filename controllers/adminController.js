const lectures = require("../models/lectures");
const users = require("../models/users");

module.exports.changeUserType = async (req, res) => {};

module.exports.deleteAccount = async (req, res) => {
  try {
    if (!req.body.name) res.status(404).send({ error: "Missing parameters" });
    else {
      const { name, mail } = req.body;
      const user = await users.findOne({ name: name, mail: mail });
      if (user) {
        await users.findOneAndDelete({ name: name, mail: mail });
        res.json({ message: "User deleted successfully" });
      }
    }
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.deleteLecture = async (req, res) => {
  try {
    if (!req.body.lectureName)
      res.status(404).send({ error: "Missing parameters" });
    else {
      const { lectureName } = req.body;
      const lecture = await lectures.findOne({ lectureName: lectureName });
      if (lecture) {
        await lectures.findOneAndDelete({ lectureName: lectureName });
      } else {
        res.status(404).send({ error: "Lecture not found" });
      }
    }
  } catch (err) {
    res.json({ error: err });
  }
};

module.exports.createLecture = async (req, res) => {
  try {
    if (!req.body.lectureName || !req.body.lecturer || !req.body.lectureCode)
      res.status(404).send({ error: "Missing parameters" });
    else {
      const { lectureName, lecturer, lectureCode } = req.body;
      const lecture = new lectures({
        lectureName: lectureName,
        lecturer: lecturer,
        lectureCode: lectureCode,
      });
      await lecture.save();
      const temp = await users.findOne({
        name: lecturer,
        userType: 2,
      });

      if (temp.lectures == null) {
        console.log(temp.lectures);
        const newuser = await users.findOneAndUpdate(
          {
            name: lecturer,
            userType: 2,
          },
          {
            lectures: [lecture.lectureName],
          }
        );
        await newuser.save();
      } else {
        if (!temp.lectures.includes(lecture.lectureName)) {
          const newuser = await users.findOneAndUpdate(
            {
              name: lecturer,
              userType: 2,
            },
            {
              $push: { lectures: lecture.lectureName },
            },
            {
              new: true,
              upsert: true,
            }
          );
          await newuser.save();
        } else {
          res.status(400).send({ error: "Lecture already exists" });
        }
      }
      res.json(lecture);
    }
  } catch (err) {
    res.json({ error: err });
  }
};
