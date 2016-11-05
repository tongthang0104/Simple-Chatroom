'use strict';

function homeDirective() {
  return {
    templateUrl: 'templates/home.html',
    replace: true,
    controller: 'homeCtrl'
  };
}

module.exports = homeDirective;
