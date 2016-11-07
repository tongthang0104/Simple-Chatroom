const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: true
  }
});

mongoose.model('User', userSchema);
