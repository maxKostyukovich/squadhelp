import db, {sequelize} from '../models';
import UserNotFoundError from '../errorHandlers/UserNotFoundError';
import BadRequestError from '../errorHandlers/ValidationError';
import ForbidenError from '../errorHandlers/ForbiddenError';
import constants from '../../constants';
const Bundle = db.Bundle;
const User = db.User;


module.exports.createBundle = async (req, res, next) => {
  let transaction;
  try{
      transaction = await sequelize.transaction();
      const user = await User.find({where: {id: req.userId} });
      if(!user){
          return next(new UserNotFoundError());
      }
      if(user.role === constants.ROLES.CREATIVE){
          return next(new ForbidenError('Do not have permission'));
      }
      req.body.userId = user.id;
      const bundle = await Bundle.create(req.body, transaction);
      if(!bundle){
          return next(new BadRequestError("Bad request"));
      }
      await transaction.commit();
      res.send(bundle);
  }catch (err) {
      await transaction.rollback();
      next(err);
  }
};

module.exports.getBundle = async (req, res, next) => {
  try{
      const id = req.params.id;
      const bundle = Bundle.findOne({ where: {id}});
      res.send(bundle);
  } catch(err){
      next(err);
  }
};