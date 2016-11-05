'use strict';

function services($http) {
  this.register = function(user) {
    return $http({
      method: 'POST',
      url: 'api/user/register',
      data: user
    }).then(function(response) {
      return response;
    }).catch(function(err) {
      console.error(err);
    });
  };

  this.sendMessages = function(messages) {
    return $http({
      method: 'POST',
      url: 'api/chat/send',
      data: messages
    }).then(function(response) {
      return response;
    }).catch(function(err) {
      console.error(err);
    });
  };

  this.fetchMessages = function() {
    return $http({
      method: 'GET',
      url: 'api/chat/fetch'
    }).then(function(response) {
      return response;
    }).catch(function(err) {
      console.error(err);
    });
  };
}

module.exports = services;
