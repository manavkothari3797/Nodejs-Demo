const express = require("express");
const router = express.Router();
const { vendorRoutes } = require("../modules/vendor");
const { adminRoutes } = require("../modules/admin");

router.use("/vendor", vendorRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
