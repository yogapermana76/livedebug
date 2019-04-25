const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const account = require('./account');
const transaction = require('./transaction');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/verify', UserController.verify);

router.use('/accounts', account);
router.use('/transactions', transaction);

module.exports = router