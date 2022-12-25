const { Router } = require("express");
const router = Router();
const student = require("../controllers/studentController");
const verifyJwt = require("../middleware/verifyJwt");
const upload = require("../middleware/upload");

router.post("/uploadAnswerSheet", upload.single("file"), student.uploadAnswerSheet);
router.post("/uploadReview", student.uploadReview);
router.post("/getUploads", student.getUploads);
router.post("/getUploadsToBeReviewed", student.getUploadsToBeReviewed);
router.post("/getReviews", student.getReviews);
router.post("/getStudentAssignments", student.getStudentAssignments);
router.get("/getAllUsers", student.getAllUsers);

module.exports = router;
