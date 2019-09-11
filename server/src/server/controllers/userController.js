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

module.exports.loginUser = async (req, res, next) => {
  const { password } = req.body;
  let transaction;
  try {
    transaction = await sequelize.transaction();
    const user = req.user;
    if(user.isBanned){
      return next(new UserNotFoundError('User is Banned'));
    }
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return next(new UserNotFoundError());
    }
    const { tokenPair } = authHelper.generateTokenPair(user.id, user.role, user.isBanned);
    const count = await RefreshToken.count({ where:{ userId: user.id } });
    if (count >= constants.DEVICES_COUNT) {
      RefreshToken.destroy({ where: { userId: user.id } },  transaction);
    }
    await RefreshToken.create({ userId: user.id, tokenString: tokenPair.refreshToken }, { transaction });
    await transaction.commit();
    user.password = undefined;
    res.send({ user, tokenPair });
  }catch (e) {
    if(e){
      await transaction.rollback();
      next(e);
    }
  }
};

module.exports.updateUserById = async(req, res, next) => {
    await User.update( Object.assign(req.body), {where: {id: req.params.id}});
    res.send({ ok: "OK" });
};

module.exports.createUser = async (req, res, next) => {
  const { lastName, firstName, email, password, role  } = req.body;
  let transaction;
  try {
      transaction = await sequelize.transaction();
      const user = await User.create({lastName, firstName, email, password, role}, { transaction });
      const {tokenPair} = authHelper.generateTokenPair(user.id, user.role, user.isBanned);
      await RefreshToken.create({userId: user.id, tokenString: tokenPair.refreshToken}, { transaction });
      await transaction.commit();
      res.send({ user, tokenPair });
  } catch(err){
    await transaction.rollback();
      if(err.errors[0].message){
          next(new DBError(err.errors[0].message));
      } else{
          next(err);
      }
  }
};

module.exports.getUser = async (req, res, next) => {
  const user = await User.findByPk(req.payload.id);
  user.password = undefined;
  if(user){
     return res.send(user);
  }
  return next(new UserNotFoundError());
};

module.exports.getAllUsers = async (req, res, next) => {
  const users = await User.findAll({ where: { role:{ [Op.ne]: constants.ROLES.ADMIN } }, order: [['id', 'ASC']] });
  const filterUsers = await users.map(value => {
    const  { id, firstName, lastName, isBanned, role } = value.dataValues;
    return { id, firstName, lastName, isBanned, role };
  });
  res.send(filterUsers);
};
