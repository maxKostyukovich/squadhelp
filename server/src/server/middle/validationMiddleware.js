const schemeOnCreate = require('../utils/validationOnCreateUser');
const schemeOnLogin = require('../utils/validationOnLogin');
const ValidationError = require('../errorHandlers/ValidationError');
module.exports.validationOnCreateUser = (req, res, next) => {
  schemeOnCreate.validate(req.body)
    .then(() => next())
    .catch(err => next(new ValidationError(err.message)));
};

module.exports.validationOnLogin = (req, res, next) => {
  schemeOnLogin.validate(req.body)
    .then(() => next())
    .catch(err => next(new ValidationError(err.message)));
};
