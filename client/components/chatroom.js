'use strict';

function ChatroomDirective() {
  return {
    templateUrl: 'templates/chatroom.html',
    replace: true,
    controller: 'chatroomCtrl'
  };
}

module.exports = ChatroomDirective;
