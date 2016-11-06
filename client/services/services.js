'use strict';

function services($http, $window) {
  this.register = function(user) {
    return $http({
      method: 'POST',
      url: 'api/user/register',
      data: user
    }).then(function(response) {
      return response.data;
    }).catch(function(err) {
      console.error(err);
    });
  };

  this.fetchAllUsers = function() {
    return $http({
      method: 'GET',
      url: 'api/user/fetchAllUsers'
    }).then(function(response) {
      return response.data;
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
      url: 'api/chat/fetchAll'
    }).then(function(response) {
      return response;
    }).catch(function(err) {
      console.error(err);
    });
  };
}

module.exports = services;
