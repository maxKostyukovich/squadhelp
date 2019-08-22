import uuid from 'node-uuid';
import constants from '../../constants';
import jwt from 'jsonwebtoken';
const generateAccessToken = (id, role, isBanned) => {
  const payload = {
    id,
    role,
    isBanned,
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
const generateTokenPair = (id, role, isBanned) => {
  const accessToken = generateAccessToken(id, role, isBanned);
  const refreshToken = generateRefreshToken();
  return { tokenPair: {accessToken, refreshToken} };
};

module.exports = {
  generateTokenPair,
};
