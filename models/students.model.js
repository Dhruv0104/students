const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll: { type: String },
    name: { type: String },

    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel;