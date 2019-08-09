const schemeOnCreate = require('../utils/validationOnCreateUser');
const schemeOnLogin = require('../utils/validationOnLogin');
const schemeOnUpdateUser = require('../utils/validationOnUpdateUser');
const ValidationError = require('../errorHandlers/ValidationError');
module.exports.validationOnCreateUser = (req, res, next) => {
  schemeOnCreate.validate(req.body)
    .then(() => next())
    .catch(err => next(new ValidationError(err.message)));
};

module.exports.validationOnLogin = async (req, res, next) => {
  try {
    await schemeOnLogin.validate(req.body);
    next();
  } catch(err){
    next(new ValidationError(err.message));
  }

};

module.exports.validationOnUpdateUser = (req, res, next) => {
  schemeOnUpdateUser.validate(req.body)
      .then(() => next())
      .catch(err => next(new ValidationError(err.message)));
};
