const SUCCESS = require("./success.messages");

class ResponseHandler {
  static success(res, responseObj) {
    return res.status(200).json({ status: SUCCESS.OK, ...responseObj });
  }

  static internalServerError(res, message) {
    return res.status(500).json({ message: message });
  }
}

module.exports = ResponseHandler;
