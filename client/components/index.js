'use strict';

const angular = require('angular');

angular.module('simpleChatroom').component('home', require('./home'));
angular.module('simpleChatroom').directive('messages', require('./messages'));
angular.module('simpleChatroom').directive('users', require('./users'));
