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
const CONTEST_TYPE = {
  NAME: 'NAME',
  LOGO: 'LOGO',
  TAGLINE: 'TAGLINE',
  NAME_LOGO: 'NAME_LOGO',
  NAME_TAGLINE: 'NAME_TAGLINE',
  LOGO_TAGLINE: 'LOGO_TAGLINE',
  NAME_LOGO_TAGLINE: 'NAME_LOGO_TAGLINE',
};

const SALT = 10;
const DEVICES_COUNT = 3;
module.exports = {
  PORT,
  JWT,
  SALT,
  DEVICES_COUNT,
  ROLES,
  ACTIONS,
  CONTEST_TYPE,
};
