const jwt  = require('jsonwebtoken');
const constants = require('../../constants');
const UnauthorizedError = require('../errorHandlers/UnauthorizedError');
module.exports = (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');
    if(!authHeader){
      return next(new UnauthorizedError());
    }
    const token = authHeader.replace('Bearer ', '');
    const payload = jwt.verify(token, constants.JWT.secret);
    if(payload.type !== constants.JWT.tokens.access.type){
      return next(new UnauthorizedError('Invalid token'));
    }
    req.headers.Authorization = token;
    req.userId = payload.id;
    next();
  }catch (err) {
    if(err instanceof jwt.TokenExpiredError){
      next(new UnauthorizedError('Token expired'));
    } else
    if (err instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedError('Invalid token'));
    } else {
      next(err);
    }
  }
};
