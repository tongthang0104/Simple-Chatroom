'use strict';

function chatroomCtrl($scope, services, $interval) {

  $interval(function() {
    $scope.fetchAllUsers();
  }, 5000);

  $scope.user = {};
  $scope.users = [];
  $scope.messages = [];
  $scope.message = {};
  $scope.notification = {};
  $scope.logined = false;

  // User register
  $scope.register = function() {
    services.register($scope.user).then(function(data) {
      $scope.logined = true;
      $scope.user = data;

      console.log('user is registering:', data);
      $scope.notification = {
        message: data.user.nickname,
        type: 'notification'
      };
      $scope.fetchAllUsers();
    }).catch(function(error) {
      console.error(error);
    });
  };

  $scope.scrollToBottom = function() {
    window.scrollTo(0, document.getElementById('message-wrapper').scrollHeight);
  };

  // Send message
  $scope.handleSubmit = function() {
    $scope.user.type = 'normal';
    services.sendMessages($scope.user).then(function() {
      $scope.user.message = '';
      $scope.fetchAllMessages();
    });
  };

  $scope.fetchAllUsers = function() {
    $scope.fetchAllMessages();
    services.fetchAllUsers().then(function(users) {
      $scope.users = users;
    }).catch(function(error) {
      console.error(error);
    });
  };

  // Get all messages
  $scope.fetchAllMessages = function() {
    services.fetchAllMessages().then(function(response) {
      $scope.messages = response.data;
      $scope.messages.unshift($scope.notification);
      console.log('all messages', response.data);
    }).catch(function(error) {
      console.error(error);
    });
  };
}

module.exports = chatroomCtrl;
