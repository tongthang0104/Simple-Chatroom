const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

module.exports.register = function(req, res) {
  const nickname = req.body.nickname;

  User.create({
    nickname: nickname
  }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(400).json(err);
    } else {
      const token = jwt.sign({nickname: user.nickname}, 's3cr3t', {expiresIn: 3600});
      user.avatar = `https://api.adorable.io/avatar/50/${user._id}`
      user.save(function(err, userUpdated) {
        res.status(201).json({success: true, token: token, user: user});
      })
    }
  });
};

module.exports.fetchAllUsers = function(req, res) {
  User
    .find()
    .exec(function(err, users) {
      if (err) {
        console.error(err);
        res
        .status(500)
        .json(err);
      } else {
        console.log('Found all users', users.length);
        res.json(users);
      }
    });
};
