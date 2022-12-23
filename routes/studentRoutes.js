const { Router } = require("express");
const router = Router();
const student = require("../controllers/studentController");
const verifyJwt = require("../middleware/verifyJwt");
router.post("/uploadAnswerSheet",verifyJwt.verifyToken, student.uploadAnswerSheet);
router.post("/reviewAnswerSheet",verifyJwt.verifyToken, student.reviewAnswerSheet);
router.post("/getUploads",verifyJwt.verifyToken, student.getUploads);
router.post("/getAssignments",verifyJwt.verifyToken, student.getAssignments);
router.post("/getReviews",verifyJwt.verifyToken, student.getReviews);
router.post("/getMyAssignments",verifyJwt.verifyToken, student.getMyAssignments);
router.get("/getAllUsers",verifyJwt.verifyToken, student.getAllUsers);

module.exports = router;
