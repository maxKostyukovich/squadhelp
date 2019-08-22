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
  CREATE: "create",
  UPDATE: "update",
  READ: "read",
  DELETE: "delete",
};
const SALT = 10;
const DEVICES_COUNT = 3;
module.exports = {
  PORT,
  JWT,
  SALT,
  DEVICES_COUNT,
  ROLES,
  ACTIONS
};
