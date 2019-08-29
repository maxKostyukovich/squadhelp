module.exports = (sequelize, DataTypes) => {
    const Contest = sequelize.define('Contest', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        bundleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'Bundles',
            },
        },
        contestTitle: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true,
            },
        },
        typeOfContest: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: ["NAME", "LOGO", "TAGLINE"]
            },
        },
        typeOfName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: ["Company", "Product", 'Project']
            },
        },
        typeOfIndustry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        targetCustomers: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        whatBusinessDo: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        styles: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        files: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cost: {
            type: DataTypes.REAL,
            allowNull: false,
            validate: {
                min: 0,
            }
        },
    });

    Contest.associate = function (models) {
        Contest.belongsTo(models.Contest, { foreignKey: 'bundleId', sourceKey: 'id' });
    };

    return Contest;
};
