import constants from '../../constants';
import { adminAbility, buyerAbility, creativeAbility } from '../rules/ability';
import ForbiddenError from '../errorHandlers/ForbiddenError';
module.exports = (req, res, next) => {
    switch (req.payload.role) {
      case constants.ROLES.ADMIN:
        req.ability = adminAbility(req.payload);
        break;
      case constants.ROLES.BUYER:
        req.ability = buyerAbility(req.payload);
        break;
      case constants.ROLES.CREATIVE:
        req.ability = creativeAbility(req.payload);
        break;
      default:
        return next(new ForbiddenError('Do not have permissions'))
    }
  next();

};