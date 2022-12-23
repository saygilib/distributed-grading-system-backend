const { Router } = require("express");
const router = Router();
const student = require("../controllers/studentController");

router.post("/uploadAnswerSheet", student.uploadAnswerSheet);
router.post("/reviewAnswerSheet", student.reviewAnswerSheet);
router.post("/getUploads", student.getUploads);
router.post("/getAssignments", student.getAssignments);
router.post("/getReviews", student.getReviews);
router.post("/getMyAssignments", student.getMyAssignments);
router.get("/getAllUsers", student.getAllUsers);

module.exports = router;
