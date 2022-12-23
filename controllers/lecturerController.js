const assignment = require("../models/assignment");

module.exports.createAssignment = async (req, res) => {
  try {
    if (!req.body.title || !req.body.dueDate || !req.body.lecture) {
      res.json({ error: "Please fill all the required fields" });
    } else {
      const newAssignment = new assignment({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        lecture: req.body.lecture,
      });
      if (req.file) {
        newAssignment.file = req.file.path;
      }

      await newAssignment
        .save()
        .then((res) => {
          res.json({ message: "Assignment created successfully" });
        })
        .catch((err) => {
          res.json({ error: err });
        });
    }
  } catch (ere) {
    res.json({ error: err });
  }
};
module.exports.getAllAsignments = async (req, res) => {}
module.exports.inspectGrading = async (req, res) => {};
module.exports.updateGrade = async (req, res) => {};
