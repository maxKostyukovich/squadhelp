import db from '../models';
import jwt from 'jsonwebtoken';
import constants from '../../constants';
import UnauthorizedError from '../errorHandlers/UnauthorizedError';
const RefreshToken = db.RefreshToken;
import authHelper from '../utils/authHelper';

let isFetching = false;

module.exports.refreshToken = (req, res, next) => {
  console.log("token try to refresh");
  isFetching = true;
  const refreshToken = req.body.refreshToken;
  try {
    const payload = jwt.verify(refreshToken, constants.JWT.secret);
    if(payload.type !== constants.JWT.tokens.refresh.type){
     return next(new UnauthorizedError('Invalid token type'));
    }
    RefreshToken.findOne({ where: { tokenString: refreshToken } })
      .then(token => {
        if(!token) {
          return next(new UnauthorizedError('Invalid refresh token'));
        }
          const accessToken = authHelper.generateAccesToken(token.userId);
          const newRefreshToken = authHelper.generateRefreshToken();
          RefreshToken.create({ userId: token.userId, tokenString: newRefreshToken });
          RefreshToken.destroy({ where: { id: token.id } });//TODO create transactions
          res.send({ tokenPair: { accessToken, refreshToken: newRefreshToken }});
      })
      .catch((err) => {
        console.log("error in first catch", err);
        next(err);
      });
  } catch(e){
    console.log("error in second catch", e);
    if(e instanceof jwt.TokenExpiredError){
      next(new UnauthorizedError('Refresh token expired'));
    } else
    if (e instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedError('Invalid token'));
    } else {
      console.log(e);
      next(e);
    }
  }
};

