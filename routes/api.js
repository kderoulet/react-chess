var express = require('express');
var router = express.Router();
var User = require('../models/user');
var usersCtrl = require('../controllers/usersCtrl');

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;