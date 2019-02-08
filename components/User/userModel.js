const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    firstName: String,
    lastName: String,
    suffix: {
      type: String,
      default: 'NA'
    }
  },
  studentNumber: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
