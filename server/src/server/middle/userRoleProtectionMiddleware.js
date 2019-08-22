import ACCESS from '../rules/roles';
import UserNotFoundError from '../errorHandlers/UserNotFoundError';
import ForbiddenError from '../errorHandlers/ForbiddenError';
import db, {sequelize} from '../models';
import { ACTIONS } from '../../constants';
const User = db.User;
module.exports.checkUserPermissions = (action) => {
  return async (req, res, next) => {
        try {
          switch(action){
            case ACTIONS.READ:
              if(req.ability.can(ACTIONS.READ, 'User')){
                return next();
              }
              break;
            case ACTIONS.UPDATE:
              const user = await User.findByPk(req.params.id);
              req.body.id = user.id;
              req.body.role = user.role;
              if(req.ability.can(ACTIONS.UPDATE, new User(req.body))){
                next();
              }
              break;
          }
        } catch(err) {
            next(err);
        }
  }
};