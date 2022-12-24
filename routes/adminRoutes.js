const { Router } = require("express");
const router = Router();
const admin = require("../controllers/adminController");
const verifyJwt = require("../middleware/verifyJwt");


router.post("/changeUserType", admin.changeUserType);
router.post("/deleteAccount", admin.deleteAccount);
router.post("/createLecture", admin.createLecture);

module.exports = router;
