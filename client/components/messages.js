'use strict';

const messagesComponent = function() {
  return {
    templateUrl: 'templates/message.html',
    replace: true,
    scope: {
      info: '=',
      self: '=',
      scrolltothis: '&'
    }
  };
};

module.exports = messagesComponent;
