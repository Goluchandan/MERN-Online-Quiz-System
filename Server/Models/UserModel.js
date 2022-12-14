const mongoose = require("mongoose");

const userSignUpSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    userType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userSignInModel = mongoose.model("users", userSignUpSchema);

module.exports = userSignInModel;
