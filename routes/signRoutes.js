const { Router } = require("express");
const router = Router();
const sign = require("../controllers/signController");

router.post("/sign_in", sign.sign_in);
router.post("/sign_up", sign.sign_up);

module.exports = router;
