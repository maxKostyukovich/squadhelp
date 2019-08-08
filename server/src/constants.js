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
  CREAT: {
    CONTEST: "CREATE_CONTEST",
  },
  UPDATE: {
    CONTEST: "UPDATE_CONTEST",
    USER: "UPDATE_USER",
  },
  READ: {
    USER: {
      ONE_USER: "READ_USER",
      ALL_USERS: "READ_ALL_USERS",
    },
    CONTEST: {
      ONE_CONTEST: "READ_CONTEST",
    }
  },
  DELETE: {

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
