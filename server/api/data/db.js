const mongoose = require('mongoose');

const dburl = 'mongodb://localhost:27017/chatroom';
const deployUrl = 'mongodb://heroku_h9xrbbjt:9a2mopf4b769c5ff7d94mvqpes@ds145677.mlab.com:45677/heroku_h9xrbbjt';

mongoose.connect(deployUrl);
mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ', deployUrl);
});

mongoose.connection.on('disconnected', function() {
  console.log('mongoose disconnected');
});

mongoose.connection.on('error', function(error) {
  console.log('mongoose connected error ', error);
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('mongoose disconnected through app termination (SIGINT)');
    process.exit(0);
  });
});

process.on('SIGTERM', function() {
  mongoose.connection.close(function() {
    console.log('mongoose disconnected through app termination (SIGTERM)');
    process.exit(0);
  });
});

process.on('SIGUSR2', function() {
  mongoose.connection.close(function() {
    console.log('mongoose disconnected through app termination (SIGUSR2)');
    process.exit(0);
  });
});

require('./user.model');
require('./message.model');
