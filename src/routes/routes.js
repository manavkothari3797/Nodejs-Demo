const express = require("express");
const router = express.Router();
const { vendorRoutes } = require("../modules/vendor");

router.use("/vendor", vendorRoutes);
module.exports = router;
