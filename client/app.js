'use strict';

const angular = require('angular');
const uiRoouter = require('angular-ui-router');

angular.module('simpleChatroom', [uiRoouter]);

require('./services');
require('./components');
require('./controllers');
require('./routes');
