const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    cash: {
      type: Number,
      default: 0,
    },
    credit: {
      type: Number,
      default: 0,
      min: 0,
    },
    isActive: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
