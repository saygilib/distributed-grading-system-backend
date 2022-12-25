const User = require("../models/users");
const Assignment = require("../models/assignment");
//ödevinin çözümünü yükler
module.exports.uploadAnswerSheet = async (req, res) => {
  try {
    if (!req.body.assignmentId || !req.body.studentId || !req.file.path) {
      res.status(400).send({ message: "Lütfen boş alan bırakmayınız." });
    } else {
      const assignment = await Assignment.findOneAndUpdate(
        {
          _id: req.body.assignmentId,
        },
        {
          $push: {
            [`uploads`]: { studentId: req.body.studentId, path: req.file.path },
          },
        }
      );
      await assignment.save();
      if (!assignment) {
        res.status(400).send({ message: "Ödev bulunamadı." });
      }
      res.status(200).send({ message: "Ödev başarıyla yüklendi." });
    }
  } catch (e) {
    res.send({ err: e });
  }
};
//diğer yüklenen çözümleri değerlendirir
module.exports.uploadReview = async (req, res) => {
  try {
    if (
      !req.body.assignmentId ||
      !req.body.reviewerId ||
      !req.body.studentId ||
      !req.body.review ||
      !req.body.score
    )
      res.status(400).send({ message: "missing parameters" });
    await Assignment.findOne({
      _id: req.body.assignmentId,
    })
      .then((response) => {
        response.uploads.map((item) => {
          if (item.studentId == req.body.studentId) {
            item.reviews.push({
              reviewerId: req.body.reviewerId,
              review: req.body.review,
              score: req.body.score,
            });
          }
        });
        response.save();
        res.status(200).send({ message: "success" });
      })
      .catch((err) => {
        res.status(400).send({ message: err || "error" });
      });
  } catch (e) {
    res.send({ err: e });
  }
};
//yüklediği ödevleri görüntüler
module.exports.getUploads = async (req, res) => {};
//değerlendirmesi için atanan ödevleri görüntüler
module.exports.getUploadsToBeReviewed = async (req, res) => {
  
};
//yaptığı değerlendirmeleri görüntüler
module.exports.getReviews = async (req, res) => {};

//ona atanan ödevleri görüntüler
module.exports.getStudentAssignments = async (req, res) => {
  try {
    const Student = await User.findOne({ _id: req.body._id });
    console.log(Student);
    let studentLectures = Student.lectures;
    console.log(studentLectures);
    var assignments = [];
    await Promise.all(
      studentLectures.map(async (item) => {
        let assignment = await Assignment.find({ lecture: item });

        assignments.push(assignment);
      })
    );
    if (assignments.length == 0) {
      res.status(400).send({ message: "Ödev bulunamadı." });
    } else res.status(200).send(assignments);
  } catch (e) {
    res.send({ err: e });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    res.send({ err: e });
  }
};
