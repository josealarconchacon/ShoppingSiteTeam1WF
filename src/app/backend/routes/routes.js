const express = require('express');
const router = express.Router();
var userController = require('../src/user/userController');
var movieController = require('../src/user/movieController');

router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/login').post(userController.loginControllerFn);
router.route('/user/user').get(userController.getUserControllerFn);
router.route('/user/logout').post(userController.logoutControllerFn);
router.route('/save/save').post(movieController.createSaveControllerFn);
router.route('/save/save').get(movieController.getSaveControllerFn);
module.exports = router;
