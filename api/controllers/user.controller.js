const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = function(req, res) {
  console.log('user registering');

  const nickname = req.body.nickname;

  User.create({
    nickname: nickname
  }, function(err, user) {
    if (err) {
      console.log('nooo');
      console.error(err);
      res.status(400).json(err);
    } else {
      console.log('user created', user);
      res.status(201).json(user);
    }
  });
};

module.exports.login = function(req, res) {

};
