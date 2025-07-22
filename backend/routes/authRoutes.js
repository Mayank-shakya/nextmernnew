const express = require("express");
const router = express.Router();
const { signup, login, getMe } = require("../controller/authController");

router.post("/signup", signup);
router.get("/me", getMe);

router.post("/login", login);

module.exports = router;
