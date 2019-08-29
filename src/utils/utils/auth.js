const jwt = require("jsonwebtoken");
const config = require("../../config");
const ResponseHandler = require("../../utils/responseHandler/response.handler");
const ERROR = require("../../utils/responseHandler/error.messages");
const SUCCESS = require("../../utils/responseHandler/success.messages");

class Auth {
  static checkToken(req, res, next) {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if (token && token.startsWith("Bearer ")) {
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, config.get("securityKey"), (err, decoded) => {
        if (err) {
          ResponseHandler.unAuthorize(res, ERROR.TOKEN_INVALID);
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      ResponseHandler.internalServerError(res, ERROR.NO_TOKEN);
    }
  }

  static login(req, res, next) {
    const userName = req.body.userName;
    const password = req.body.password;

    const mockUserName = "admin";
    const mockPassWord = "password";

    if (userName && password) {
      if (userName === mockUserName && password === mockPassWord) {
        const token = jwt.sign(
          { username: userName },
          config.get("securityKey"),
          {
            expiresIn: "24h" // expires in 24 hours
          }
        );
        return ResponseHandler.success(res, {
          message: SUCCESS.AUTH_SUCCESS,
          token: token
        });
      } else {
        return ResponseHandler.inCorrectCredential(
          res,
          ERROR.INCORRECT_CREDENTIALS
        );
      }
    } else {
      return ResponseHandler.authenticationFailed(res, ERROR.AUTH_FAILED);
    }
  }

  static logout(req, res, next) {
    console.log(req);
    return ResponseHandler.authenticationFailed(res, ERROR.AUTH_FAILED);
  }
}

module.exports = Auth;
