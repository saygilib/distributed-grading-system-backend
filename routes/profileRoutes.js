const { Router } = require("express");
const router = Router();
const profile = require("../controllers/profileController");
const verifyJwt = require("../middleware/verifyJwt");
router.get("/getCurrentProfile", profile.getCurrentProfile);
router.post("/changeProfileInfo", profile.changeProfileInfo);

module.exports = router;