import UserNotFoundError from '../errorHandlers/UserNotFoundError';
import ForbiddenError from '../errorHandlers/ForbiddenError';
import db from '../models';
import { ACTIONS } from '../../constants';
const User = db.User;
module.exports.checkUserPermissions = (action) => {
  return async (req, res, next) => {
        try {
          switch(action){
            case ACTIONS.READ:
              if(req.ability.can(ACTIONS.READ, new User({ id: req.payload.id }))){
                return next();
              }
              break;
            case ACTIONS.UPDATE:
              const user = await User.findByPk(req.params.id);
              console.log('first ',req.ability.can(ACTIONS.UPDATE, new User(req.body)));
              console.log('second ',checkPermissionsPerField(req.ability,ACTIONS.UPDATE, Object.keys(req.body)));
              if(req.ability.can(ACTIONS.UPDATE, new User(req.body)) && checkPermissionsPerField(req.ability,ACTIONS.UPDATE, Object.keys(req.body))){
                return next();
              }
              break;

              case ACTIONS.CREATE:
                return next();
              case ACTIONS.DELETE:
                if(req.ability.can(ACTIONS.DELETE, new User({ id: req.params.id }))){
                  return next();
                }
                break;
          }
        } catch(err) {
           return next(err);
        }
        return next(new ForbiddenError());
  }
};

function checkPermissionsPerField(ability,action,fields) {
  let res = true;
  console.log(fields);
  fields.map(value => {
    if(ability.cannot(action,'User',value)){
      res = false
    }
  });
  return res;
}