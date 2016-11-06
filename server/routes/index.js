const express = require('express');
const router = express.Router();

const userCtrl = require('../api/controllers/user.controller.js');
const chatCtrl = require('../api/controllers/user.controller.js');

router
  .route('/user/register')
  .post(userCtrl.register);

router
  .route('/chat/send')
  .post(chatCtrl.sendMessages);

router
  .route('/chat/fetch')
  .post(chatCtrl.fetchMessages);

module.exports = router;
