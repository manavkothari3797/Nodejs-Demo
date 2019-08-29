const express = require("express");
const router = express.Router();
// const adminController = require("./admin.controller");
const Auth = require("../../utils/utils/auth");

router.post("/login", Auth.login);
router.get("/logout", Auth.logout);
// router.post("/", adminController.createAdmin);

module.exports = router;
