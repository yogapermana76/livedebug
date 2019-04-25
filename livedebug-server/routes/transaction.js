const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction');
const { authentication, authorization, authForTransfer } = require('../middlewares/auth');

router.use(authentication);

router.post('/', authorization, authForTransfer, transactionController.transfer);

module.exports = router
