const mongoose = require("mongoose");
 
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName : { type: String                 },
    email    : { type: String, required: true },
    password : { type: String, required: true },
    isAdmin  : { type: Boolean, default: false },
  },
  {
    versionKey: false, 
    timestamps: true,
  }
); 

module.exports = mongoose.model("users", userSchema);
