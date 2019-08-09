import db from '../models';
import constants from '../../constants';
import UserNotFound from '../errorHandlers/UserNotFoundError';
const User = db.User;
module.exports = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({where: { email }});
  if (user) {
    req.user = user;
    next();
  } else {
    return next(new UserNotFound());
  }
};