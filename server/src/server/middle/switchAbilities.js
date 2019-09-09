import constants from '../../constants';
import { adminAbility, buyerAbility, creativeAbility } from '../rules/ability';
import ForbiddenError from '../errorHandlers/ForbiddenError';
import db from '../models';
import { ACTIONS } from '../../constants';
const User = db.User;

module.exports = async (req, res, next) => {
    switch (req.payload.role) {
      case constants.ROLES.ADMIN:
        req.ability = await adminAbility(req.payload);
        break;
      case constants.ROLES.BUYER:
        req.ability = await buyerAbility(req.payload);
        break;
      case constants.ROLES.CREATIVE:
        req.ability = await creativeAbility(req.payload);
        break;
      default:
        return next(new ForbiddenError('Do not have permissions'))
    }
  next();

};