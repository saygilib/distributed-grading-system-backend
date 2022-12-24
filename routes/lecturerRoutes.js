const { Router } = require("express");
const router = Router();
const lecturer = require("../controllers/lecturerController");
const upload = require("../middleware/upload");
const verifyJwt = require("../middleware/verifyJwt");
router.post("/createAssignment", upload.single("file"),lecturer.createAssignment);
router.post("/inspectGrading" ,lecturer.inspectGrading);
router.post("/updateGrade", lecturer.updateGrade);

module.exports = router;
