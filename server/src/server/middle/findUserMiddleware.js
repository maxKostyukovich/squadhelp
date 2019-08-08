import db from '../models';
import constants from '../../constants';
import UserNotFound from '../errorHandlers/UserNotFoundError';
const User = db.User;
module.exports = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({where: { email }});
  if(!user){
      return next(new UserNotFound());
  }
  req.user = user;
  next();
};