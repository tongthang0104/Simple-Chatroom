'use strict';

function homeCtrl($scope, services, $window, $location) {
  $scope.user = {}

  $scope.register = function() {
    console.log('user is registering');

    services.register($scope.user).then(function(token) {
      // $window.localStorage.setItem('user.token', token );
      // $location.path('/#/chatroom');
      console.log('user registering response: ', token);
    });
  };
}

module.exports = homeCtrl;
