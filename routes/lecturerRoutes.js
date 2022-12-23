const { Router } = require("express");
const router = Router();
const lecturer = require("../controllers/lecturerController");
const upload = require("../middleware/upload");
const verifyJwt = require("../middleware/verifyJwt");
router.post("/createAssignment", upload.single("file"),lecturer.createAssignment);
router.post("/inspectGrading", verifyJwt.verifyToken ,lecturer.inspectGrading);
router.post("/updateGrade",verifyJwt.verifyToken, lecturer.updateGrade);

module.exports = router;
