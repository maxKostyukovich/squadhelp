import db from '../models';
import jwt from 'jsonwebtoken';
import constants from '../../constants';
import UnauthorizedError from '../errorHandlers/UnauthorizedError';
const RefreshToken = db.RefreshToken;
import authHelper from '../utils/authHelper';

module.exports.refreshToken = (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  try {
    const payload = jwt.verify(refreshToken, constants.JWT.secret);
    if(payload.type !== constants.JWT.tokens.refresh.type){
      throw new UnauthorizedError('Invalid token type');
    }
    RefreshToken.findOne({ where: { tokenString: refreshToken } })
      .then(token => {
        if(token) {
          const accessToken = authHelper.generateAccesToken(token.userId);
          const newRefreshToken = authHelper.generateRefreshToken();
          RefreshToken.create({ userId: token.userId, tokenString: newRefreshToken });
          RefreshToken.destroy({ where: { id: token.id } });//TODO create transactions
          res.send({ accessToken, refreshToken: newRefreshToken });
        }else {
          throw new UnauthorizedError('Invalid refresh token');
        }
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  } catch(e){
    if(e instanceof jwt.TokenExpiredError){
      next(new UnauthorizedError('Token expired'));
    } else
    if (e instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedError('Invalid token'));
    } else {
      console.log(e);
      next(e);
    }

  }
};

