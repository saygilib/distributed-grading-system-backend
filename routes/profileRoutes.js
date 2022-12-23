const { Router } = require("express");
const router = Router();
const profile = require("../controllers/profileController");

router.get("/getCurrentProfile", profile.getCurrentProfile);
router.post("/changeProfileInfo", profile.changeProfileInfo);

module.exports = router;