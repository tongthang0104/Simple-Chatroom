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

const messagesSchema = new mongoose.Schema({

  user: userSchema,
  message: {
    type: String,
    require: true
  },

  createOn: {
    type: Date,
    'default': Date.now
  }
});

mongoose.model('User', userSchema);
mongoose.model('Messages', messagesSchema);
