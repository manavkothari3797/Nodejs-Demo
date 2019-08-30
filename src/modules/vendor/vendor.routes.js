const express = require("express");
const router = express.Router();
const vendorController = require("./vendor.controller");
const Auth = require("../../utils/utils/Auth");

router.use(Auth.checkToken);
router.get("/", vendorController.vendorInfo);
router.post("/", vendorController.createVendor);

module.exports = router;
