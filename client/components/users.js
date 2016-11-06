'use strict';

const usersComponent = function() {
  return {
    templateUrl: 'templates/user.html',
    replace: true,
    scope: {
      value: '='
    }
  };
};

module.exports = usersComponent;
