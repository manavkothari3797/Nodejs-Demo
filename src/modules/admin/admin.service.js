const AdminSchema = require("./admin.model");

exports.createAdmin = async adminDetails => {
  return await AdminSchema.create(adminDetails);
};

exports.getAdmin = async email => {
  return await AdminSchema.findOne({ email: email });
};
