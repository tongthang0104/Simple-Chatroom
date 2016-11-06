const express = require('express');
const router = express.Router();

const userCtrl = require('../api/controllers/user.controller.js');
const chatCtrl = require('../api/controllers/user.controller.js');

router
  .route('/user/register')
  .post(userCtrl.register);

router
  .route('/user/fetchAllUsers')
  .get(userCtrl.fetchAllUsers);

// router
//   .route('/chat/fetchAllMessages')
//   .post(chatCtrl.fetchAllMessages);

module.exports = router;
