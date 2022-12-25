const { Router } = require("express");
const router = Router();

const lectures = require("../controllers/lectureController");

router.get("/getAllLectures", lectures.getAllLectures);

module.exports = router;