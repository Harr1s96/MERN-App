const Sequelize = require("sequelize");

module.exports = (sequelize) => {

    return sequelize.define("user", {

        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            allowNull: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
        {
            timestamps: false
        }
)}

