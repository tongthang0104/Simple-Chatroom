'use strict';

const bodyParser  = require('body-parser');
const path = require('path');
const routes = require('./routes/index.js');

module.exports = function(app, express) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../client')));
  app.use('/api', routes);
};
