const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = mongoose.model(
  "vendors",
  new Schema(
    {
      name: String,
      address: String
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    }
  )
);

module.exports = VendorSchema;
