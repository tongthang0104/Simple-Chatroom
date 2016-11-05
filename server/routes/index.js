const express = require('express');
const router = express.Router();

const userCtrl = require('../../api/controllers/user.controller.js');

router
  .route('/user/register')
  .post(userCtrl.register);

router
  .route('/user/login')
  .post(userCtrl.login);

module.exports = router;
