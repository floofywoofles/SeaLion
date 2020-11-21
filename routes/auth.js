const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user');
const userAuthController = require('../controllers/userAuth');

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/login',userAuthController.login)

router.post('/signup',userAuthController.signup)

module.exports = router;
