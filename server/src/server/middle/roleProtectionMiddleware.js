import ACCESS from '../rules/roles';
import UserNotFoundError from '../errorHandlers/UserNotFoundError';
import ForbiddenError from '../errorHandlers/ForbiddenError';
import db, {sequelize} from '../models';
const User = db.User;
module.exports.checkPermissions = (action) => {
  return async (req, res, next) => {
        const userId = req.userId;
        const user = await User.findByPk(userId);
        if(!user){
            return next(new UserNotFoundError());
        }
        const permissionObj = ACCESS.get(action).get(user.role);
        if(!permissionObj){
            return next(new ForbiddenError("Permissions denied"));
        }


  }
};