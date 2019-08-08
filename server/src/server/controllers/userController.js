import db from '../models';
import constants from '../../constants';
import bcrypt from 'bcrypt';
import UserNotFoundError from '../errorHandlers/UserNotFoundError';
import DBError from '../errorHandlers/DBError';
import authHelper from '../utils/authHelper';
import { sequelize } from '../models';
const Op = db.Sequelize.Op;
const User = db.User;
const RefreshToken = db.RefreshToken;

module.exports.getUserById = (req, res) => { //function only for testing
  User.findById(req.params.id)
    .then(user => {
      res.send(user);
    })
    .catch(err =>{
      res.send(err.message);
    });
};

module.exports.loginUser = async (req, res, next) => {
  const { password } = req.body;
  let transaction;
  try {
    transaction = await sequelize.transaction();
      const user = req.user;
      if(user.isBanned){
          return next(new UserNotFoundError("User is Banned"));
      }
      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid) {
        return next(new UserNotFoundError());
      }
      const accessToken = authHelper.generateAccesToken(user.id);
      const refreshToken = authHelper.generateRefreshToken();
      const count = await RefreshToken.count({ where:{ userId: user.id } });
      if (count >= constants.DEVICES_COUNT) {
        RefreshToken.destroy({ where: { userId: user.id } },  transaction);
      }
      await RefreshToken.create({ userId: user.id, tokenString: refreshToken }, { transaction });
      await transaction.commit();
      res.send({ user, tokenPair: { accessToken, refreshToken } });
  }catch (e) {
    if(e){
      await transaction.rollback();
      next(e);
    }
  }
};

module.exports.updateUserById = async(req, res, next) => {
  try{
      const user = await User.findByPk(req.params.id, {attributes: {exclude: ['password']}});
      if(!user){
          return next(new UserNotFoundError());
      }
      const result = await user.update(req.body);
      res.send(result);
  }catch (e) {
      next(e);
  }
};

module.exports.createUser = (req, res, next) => {
  const { lastName, firstName, email, password, role  } = req.body;
  User.create({ lastName, firstName, email, password, role })
    .then(user => {
      const accessToken = authHelper.generateAccesToken(user.id);
      const refreshToken = authHelper.generateRefreshToken();
      RefreshToken.create({ userId: user.id, tokenString: refreshToken });
      res.send({ user, tokenPair:{ accessToken, refreshToken } });
    })
    .catch(err => {
     if(err.errors[0].message){
         next(new DBError(err.errors[0].message))
     } else{
         next(err);
     }
    });
};

module.exports.getUser = (req, res, next) => {
  User.findByPk(req.userId,{attributes: { exclude: ['password'] }})
    .then(user =>{
      if(!user){
        return next(new UserNotFoundError());
      }
      res.send(user);
    }).catch(err => next(err));
};

module.exports.getAllUsers = (req, res, next) => {
  User.findAll({where: {role:{[Op.ne]: "ADMIN"}}})
      .then(users =>{
        if(!users){
          return next(new UserNotFoundError());
        }
        users.sort((a,b) => a.id - b.id );
        res.send(users);
      }).catch(err => next(err));
};
