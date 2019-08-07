module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        notEmpty: true,
      },
    },
    isBanned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "GUEST",
      validate: {
        isIn: [['CREATIVE', 'BUYER', 'ADMIN', 'GUEST']]
      }
    },
  });

  User.associate = function (models) {
    User.hasMany(models.RefreshToken, { foreignKey: 'userId', targetKey: 'id' });
    User.hasMany(models.Bundle,{ foreignKey: 'userId', targetKey: 'id'});
  };

  return User;
};
