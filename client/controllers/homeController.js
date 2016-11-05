'use strict';

function homeCtrl($scope, service) {
  $scope.register = function() {
    console.log('user is registering');

    service.register().then(function(response) {
      console.log('user registering response: ', response);
    });
  };
}

module.exports = homeCtrl;
