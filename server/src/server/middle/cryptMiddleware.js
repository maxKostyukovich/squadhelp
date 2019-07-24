const bcrypt = require('bcrypt');
const constants = require('../../constants');
module.exports = (req, res, next) => {
  if(req.body.password){
    bcrypt.hash(req.body.password, constants.SALT, (err, hash) => {
      if(!err) {
        req.body.password = hash;
        next();
      } else {
        next(new Error ('Password is not hashed'));
      }
    });
  }
};
