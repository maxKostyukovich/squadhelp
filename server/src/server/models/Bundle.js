module.exports = (sequelize, DataTypes) => {
    const Bundle = sequelize.define('Bundle', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'Users',
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bundleType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isPaid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        typeOfIndustry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        isComplete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        targetCustomers: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });
    Bundle.associate = function (models) {
        Bundle.hasMany(models.Contest, { foreignKey: 'bundleId', targetKey: 'id' });
        Bundle.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'id' });
    };
    return Bundle;
};
