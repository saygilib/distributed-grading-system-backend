const { Router } = require("express");
const router = Router();
const lecturer = require("../controllers/lecturerController");

router.post("/createAssignment", lecturer.createAssignment);
router.post("/inspectGrading", lecturer.inspectGrading);
router.post("/updateGrade", lecturer.updateGrade);

module.exports = router;
