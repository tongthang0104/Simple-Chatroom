'use strict';

function chatroomCtrl($scope, services, $interval) {

  $interval(function() {
    $scope.fetchAllMessages();
  }, 5000);

  $scope.user = {};
  $scope.users = [];
  $scope.messages = [];
  $scope.message = {};
  $scope.logined = false;

  // User register
  $scope.register = function() {
    console.log('user is registering');
    services.register($scope.user).then(function(data) {
      $scope.logined = true;
      $scope.user = data;
      console.log('user registering response: ', data);
    }).catch(function(error) {
      console.error(error);
    });
  };

  $scope.scrollToBottom = function() {
    window.scrollTo(0, document.getElementById('message-wrapper').scrollHeight);
  };

  // Send message
  $scope.handleSubmit = function() {
    services.sendMessages($scope.user).then(function(data) {
      console.log('message sent', data);
      $scope.user.message = '';
      $scope.fetchAllMessages();
    });
  };

  $scope.fetchAllUsers = function() {
    $scope.fetchAllMessages();
    services.fetchAllUsers().then(function(users) {
      console.log('All users', users);
      $scope.users = users;
    }).catch(function(error) {
      console.error(error);
    });
  };

  // Get all messages
  $scope.fetchAllMessages = function() {
    services.fetchAllMessages().then(function(response) {
      $scope.messages = response.data
      console.log('all messages', response.data);
    }).catch(function(error) {
      console.error(error);
    });
  };
}

module.exports = chatroomCtrl;
