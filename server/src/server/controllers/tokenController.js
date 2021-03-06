import db, {sequelize} from '../models';
import jwt from 'jsonwebtoken';
import constants from '../../constants';
import UnauthorizedError from '../errorHandlers/UnauthorizedError';
const RefreshToken = db.RefreshToken;
const User = db.User;
import authHelper from '../utils/authHelper';


module.exports.refreshToken = async (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  let transaction;
  try {
    transaction = await sequelize.transaction();
    const payload = jwt.verify(refreshToken, constants.JWT.secret);
    if(payload.type !== constants.JWT.tokens.refresh.type){
     return next(new UnauthorizedError('Invalid token type'));
    }
    const token = await RefreshToken.findOne({ where: { tokenString: refreshToken }});
    if(!token){
      return next(new UnauthorizedError('Invalid refresh token'))
    }
    const user = await User.findByPk(token.userId);
    const { tokenPair } = authHelper.generateTokenPair(token.userId, user.role, user.isBanned);
    await RefreshToken.create({ userId: token.userId, tokenString: tokenPair.refreshToken }, { transaction });
    await RefreshToken.destroy({ where: { id: token.id }}, transaction);
    await transaction.commit();
    res.send({ tokenPair });
  } catch(e){
    await transaction.rollback();
    if(e instanceof jwt.TokenExpiredError){
      next(new UnauthorizedError('Refresh token expired'));
    } else
    if (e instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedError('Invalid token'));
    } else {
      next(e);
    }
  }
};

module.exports.deleteToken = async (req, res, next) => {
  const token = req.body.refreshToken;
  try {
    await RefreshToken.destroy({where: {tokenString: token}});
    res.send("OK");
  } catch (err) {
    next(err);
  }
};

