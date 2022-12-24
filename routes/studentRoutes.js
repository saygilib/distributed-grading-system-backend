const { Router } = require("express");
const router = Router();
const student = require("../controllers/studentController");
const verifyJwt = require("../middleware/verifyJwt");
router.post("/uploadAnswerSheet", student.uploadAnswerSheet);
router.post("/reviewAnswerSheet", student.reviewAnswerSheet);
router.post("/getUploads", student.getUploads);
router.post("/getAssignments", student.getAssignments);
router.post("/getReviews", student.getReviews);
router.post("/getStudentAssignments", student.getStudentAssignments);
router.get("/getAllUsers", student.getAllUsers);

module.exports = router;
