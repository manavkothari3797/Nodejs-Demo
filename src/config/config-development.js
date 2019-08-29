const convict = require("convict");

const config = convict({
  port: {
    doc: "application port",
    format: Number,
    default: 3000,
    arg: "port"
  },
  dbUrl: {
    doc: "monogdb database url",
    format: String,
    default:
      "mongodb+srv://manav:123456%21%40%23@cluster0-lz91a.mongodb.net/Test?retryWrites=true&w=majority",
    arg: "dburl"
  },
  securityKey: {
    doc: "authentication key",
    format: String,
    default: "randomkey",
    arg: "security-key"
  }
});

module.exports = config;
