const PORT = process.env.PORT || 3000;
const JWT = {
  secret: 'andreyvizdoravlyvai',
  tokens: {
    access: {
      type: 'access',
      expiresIn: '30m',
    },
    refresh: {
      type: 'refresh',
      expiresIn: '30d',
    },
  },
};
const ROLES = {
  BUYER: "BUYER",
  CREATIVE: "CREATIVE",
  ADMIN: "ADMIN"
};
const ACTIONS = {
  GET: {
    USER: "USER",
  },
  POST: {
  }
};
const SALT = 10;
const DEVICES_COUNT = 3;
module.exports = Object({
  PORT,
  JWT,
  SALT,
  DEVICES_COUNT,
  ROLES,
  ACTIONS
});
