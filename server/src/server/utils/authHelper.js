import uuid from 'node-uuid';
import constants from '../../constants';
import jwt from 'jsonwebtoken';
import db from '../models';
const RefreshToken = db.RefreshToken;
const generateAccesToken = (id) => {
  const payload = {
    id,
    type: constants.JWT.tokens.access.type,
  };
  const options = { expiresIn: constants.JWT.tokens.access.expiresIn };

  return jwt.sign(payload, constants.JWT.secret, options);
};

const generateRefreshToken = () => {
  const payload = {
    type: constants.JWT.tokens.refresh.type,
  };
  const options = { expiresIn: constants.JWT.tokens.refresh.expiresIn };

  return jwt.sign(payload, constants.JWT.secret, options);
};

// const replaceDBRefreshToken = (tokenString, oldTokenString) => {
//   RefreshToken.find({ oldTokenString })
//     .then(token => {
//       if(!token){
//         throw new Error('Invalid token string!');
//       } else {
//         RefreshToken.create({ userId: token.userId, tokenString });
//         RefreshToken.destroy({ where: { tokenString: oldTokenString } });
//       }
//     });
// };
module.exports = {
  generateAccesToken,
  generateRefreshToken,
};
