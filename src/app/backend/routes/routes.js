const express = require('express');
const router = express.Router();
var userController = require('../src/user/userController');

router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/login').post(userController.loginControllerFn);
router.route('/user/user').get(userController.getUserControllerFn);
router.route('/user/logout').post(userController.logoutControllerFn);

module.exports = router;
