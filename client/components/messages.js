'use strict';

const messagesComponent = function() {
  return {
    templateUrl: 'templates/message.html',
    replace: true,
    controller: 'chatCtrl'
  };
};

module.exports = messagesComponent;
