const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken')

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
      const token = jwt.sign({nickname: user.nickname}, 's3cr3t', {expiresIn: 3600});

      console.log('user created', user);
      res.status(201).json({success: true, token: token, user: user});
    }
  });
};

module.exports.authenticate = function(req, res, next) {
  const headerExists = req.headers.authorization;

  if (headerExists) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 's3cr3t', function(error, decoded) {
      if (error) {
        console.error(error);
        res.status(401).json('Unauthorized');
      } else {
        req.user = decoded.username;
        next();
      }
    });
  } else {
    res.status(403).json('No token provided');
  }
}
