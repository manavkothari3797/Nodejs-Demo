const vendorService = require("./vendor.service");
const ResponseHandler = require("../../utils/responseHandler/response.handler");
const ERROR = require("../../utils/responseHandler/error.messages");

exports.vendorInfo = async (req, res) => {
  let vendors = [];
  try {
    vendors = await vendorService.getAllVendors();
  } catch (error) {
    return ResponseHandler.internalServerError(
      res,
      ERROR.INTERNAL_SERVER_ERROR
    );
  }
  return ResponseHandler.success(res, { vendors: vendors });
};

exports.createVendor = async (req, res) => {
  if (!req.body.name || !req.body.address) {
    return ResponseHandler.internalServerError(res, ERROR.ALL_FIELD_REQUIRED);
  }

  const vendor = {
    name: req.body.name,
    address: req.body.address
  };

  let vendorDetails = {};

  try {
    vendorDetails = await vendorService.createVendor(vendor);

    if (!vendorDetails) {
      return ResponseHandler.internalServerError(res, ERROR.VENDOR_NOT_FOUND);
    }
  } catch (error) {
    return ResponseHandler.internalServerError(
      res,
      ERROR.INTERNAL_SERVER_ERROR
    );
  }
  return ResponseHandler.success(res, vendorDetails);
};
