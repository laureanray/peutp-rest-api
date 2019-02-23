const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    firstName: String,
    lastName: String
  },
  birthday: Date,
  college: String,
  degreeProgram: String,
  campus: String,
  studentNumber: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  private: {
    password: String
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
