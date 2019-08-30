const ResponseHandler = require("../../utils/responseHandler/response.handler");
const ERROR = require("../../utils/responseHandler/error.messages");
const adminService = require("./admin.service");
const SUCCESS = require("../../utils/responseHandler/success.messages");
const Admin = require("../../utils/utils/Admin");

exports.createAdmin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return ResponseHandler.internalServerError(res, ERROR.ALL_FIELD_REQUIRED);
  }

  const admin = await adminService.getAdmin(req.body.email);

  if (admin) {
    return ResponseHandler.conflict(res, ERROR.EMIL_ALREADY_REG);
  }

  try {
    await Admin.creteAdmin(req.body);
  } catch (error) {
    return ResponseHandler.internalServerError(
      res,
      ERROR.INTERNAL_SERVER_ERROR
    );
  }

  return ResponseHandler.success(res, {
    message: SUCCESS.ADMIN_CREATED
  });
};

exports.getAdmin = async (req, res) => {};
