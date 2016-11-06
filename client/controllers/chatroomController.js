'use strict';

function chatroomCtrl($scope, services, $window, $location) {
  $scope.user = {};
  $scope.users = [{
    nickname: 'Thang'
  }];
  $scope.messages = [];
  $scope.logined = false;

  $scope.register = function() {
    console.log('user is registering');
    services.register($scope.user).then(function(data) {
      $scope.logined = true;
      console.log('user registering response: ', data);
    }).catch(function(error) {
      console.error(error);
    });
  };

  $scope.scrollToBottom = function() {
    window.scrollTo(0, document.getElementById('message-wrapper').scrollHeight);
  };

  $scope.handleSubmit = function() {
    console.log('chatting');
  };

  $scope.fetchAllUsers = function() {
    services.fetchAllUsers().then(function(users) {
      console.log('All users', users);
      $scope.users = users;
    }).catch(function(error) {
      console.error(error);
    });
  };

  $scope.fetchMessages = function() {
    services.fetchMessages().then(function(data) {
      console.log('messages', data);
    }).catch(function(error) {
      console.error(error);
    });
  };
}

module.exports = chatroomCtrl;
