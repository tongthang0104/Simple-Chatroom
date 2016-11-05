const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    require: true
  },
  avatar: {
    type: String
  }
});

mongoose.model('User', userSchema);
