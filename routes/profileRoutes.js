const { Router } = require("express");
const router = Router();
const profile = require("../controllers/profileController");
const verifyJwt = require("../middleware/verifyJwt");
router.get("/getCurrentProfile",verifyJwt.verifyToken, profile.getCurrentProfile);
router.post("/changeProfileInfo",verifyJwt.verifyToken, profile.changeProfileInfo);

module.exports = router;