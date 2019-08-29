const express = require("express");
const router = express.Router();
const vendorController = require("./vendor.controller");

router.get("/", vendorController.vendorInfo);
router.post("/", vendorController.createVendor);

module.exports = router;
