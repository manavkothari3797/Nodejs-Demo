const VendorSchema = require("../vendor/vendor.model");

exports.createVendor = async vendorDetails => {
  return await VendorSchema.create(vendorDetails);
};

exports.getAllVendors = async () => {
  return await VendorSchema.find({});
};
