const User = require('../models/user');
const regis = require('../helpers/register');
const jwt = require('../helpers/token');

class UserController {
  static register(req, res) {
    let user = {
      email: req.body.email,
      password: req.body.password
    };

    User.create(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      if (err.errors.email) {
        res.status(409).json({ err: err.errors.email.reason });
      } else if(err.errors.password) {
        res.status(409).json({ err: err.errors.password.message });
      } else {
        res.status(500).json(err);
      }
    })
  }

  static login(req, res) {
    User
     .findOne(req.body.email)
     .then(user => {
       if (user) {
         if (regis.checkPassword(req.body.password, user.password)) {
           let signUser = {
              id: user._id,
              email: user.email
           };

           let token = jwt.sign(signUser);
           res.status(200).json({
             token: token,
             _id: user._id,
             email: user.email
           })
         }
       } else {
         res.status(500).json({ err: "User not found" });
       }
     })
     .catch(err => {
       res.status(500).json(err);
     })
  }

  static verify(req, res) {
    User
     .findOneAndUpdate({
       email: req.body.email,
       verificationCode: req.body.verificationCode
     }, {
       $set: { isVerified: true }
     })
     .then(user => {
       if(user) {
         res.status(200).json(user);
       } else {
         res.status(400).json({ err: 'Verification code not match'})
       }
     })
     .catch(err => {
       res.status(500).json(err);
     })
  }
}

module.exports = UserController
