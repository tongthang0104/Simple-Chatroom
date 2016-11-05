const express = require('express');
const router = express.Router();

const userCtrl = require('../api/controllers/user.controller.js');

router
  .route('/user/register')
  .post(userCtrl.register);

module.exports = router;
