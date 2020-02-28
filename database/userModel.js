const {Sequelize, DataTypes} = require("sequelize");

module.exports = Sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false
    }
);

