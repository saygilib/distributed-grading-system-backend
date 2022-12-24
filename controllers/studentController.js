const User = require("../models/users");
const Assignment = require("../models/assignment");
//ödevinin çözümünü yükler
module.exports.uploadAnswerSheet = async (req, res) => {};
//diğer yüklenen çözümleri değerlendirir
module.exports.reviewAnswerSheet = async (req, res) => {};
//yüklediği ödevleri görüntüler
module.exports.getUploads = async (req, res) => {};
//değerlendirmesi için atanan ödevleri görüntüler
module.exports.getAssignments = async (req, res) => {};
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
    if(assignments.length == 0){
      res.status(400).send({message:"Ödev bulunamadı."})
    }
    else res.status(200).send(assignments);
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
