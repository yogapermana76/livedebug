const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');
const { authentication, authorization } = require('../middlewares/auth');


router.get('/accountNumber', accountController.findAccounts);
router.delete('/:accountNumber', authorization, accountController.remove);
router.post('/new', accountController.newAccount);

module.exports = router
