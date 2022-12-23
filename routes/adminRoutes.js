const { Router } = require("express");
const router = Router();
const admin = require("../controllers/adminController");

router.post("/changeUserType", admin.changeUserType);
router.post("/deleteAccount", admin.deleteAccount);
router.post("/createLecture", admin.createLecture);

module.exports = router;
