const { Router } = require("express");
const router = Router();
const admin = require("../controllers/adminController");
const verifyJwt = require("../middleware/verifyJwt");


router.post("/changeUserType",verifyJwt.verifyToken, admin.changeUserType);
router.post("/deleteAccount",verifyJwt.verifyToken, admin.deleteAccount);
router.post("/createLecture",verifyJwt.verifyToken, admin.createLecture);

module.exports = router;
