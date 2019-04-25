const Account = require('../models/account');

class AccountController {
  static findAccounts(req, res) {
    Account.findOne({ accountNumber: req.params.accountNumber })
     .populate('userId')
     .then(account => {
       res.status(200).json(account);
     })
     .catch(err => {
       res.status(500).json(err);
     })
  }

  static newAccount(req, res) {
    let acc = null;

    if (req.body.hasOwnProperty('balance')) {
      acc = {
        balance: req.body.balance,
        userId: req.user._id
      }
    } else {
      acc = {
        balance: 500000,
        userId: req.user._id
      }
    }

    Account.create(acc)
     .then(account => {
       res.status(201).json(account);
     })
     .catch(err => {
       res.status(500).json(err);
     })
  }

  static remove(req, res) {
    Account
     .deleteOne({
       accountNumber: req.params.accountNumber
     })
     .then(deleted => {
       res.status(200).json(deleted);
     })
     .catch(err => {
       res.status(500).json(err);
     })
  }

}

module.exports = AccountController
