const SUCCESS = require("./success.messages");

class ResponseHandler {
  static success(res, responseObj) {
    return res.status(200).json({ status: SUCCESS.OK, ...responseObj });
  }

  static internalServerError(res, message) {
    return res.status(500).json({ message: message });
  }

  static unAuthorize(res, message) {
    return res.status(401).json({ message: message });
  }

  static authenticationFailed(res, message) {
    return res.status(400).json({ message: message });
  }

  static inCorrectCredential(res, message) {
    return res.status(403).json({ message: message });
  }

  static conflict(res, message) {
    return res.status(409).json({ message: message });
  }
}

module.exports = ResponseHandler;
