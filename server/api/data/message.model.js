const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true
  },

  nickname: {
    type: String,
    require: true
  },

  type: {
    type: String,
    require: true
  },

  avatar: {
    type: String,
    require: true
  },

  message: {
    type: String,
    require: true
  },

  createOn: {
    type: Date,
    'default': Date.now
  }
});

mongoose.model('Message', messagesSchema);
