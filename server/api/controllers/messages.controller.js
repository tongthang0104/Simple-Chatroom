const mongoose = require('mongoose');
const Messages = mongoose.model('Message');

module.exports.sendMessages = function(req, res) {
  const user = req.body;
  console.log('sending messages:', user, user._id, user.message);
  console.log('User id', user.user._id, user.user.nickname, user.user.avatar);
  Messages.create({
    userId: user.user._id,
    nickname: user.user.nickname,
    avatar: user.user.avatar,
    message: user.message
  }, function(err, message) {
    if (err) {
      console.error(err);
      res.status(400).json(err);
    } else {
      console.log('messages sent', message);
      res.status(201).json({success: true, from: user});
    }
  });
};

module.exports.fetchAllMessages = function(req, res) {
  Messages
    .find()
    .exec(function(err, messages) {
      if (err) {
        console.error(err);
        res
        .status(500)
        .json(err);
      } else {
        console.log('Found all messages', messages.length);
        res.json(messages);
      }
    });
};
