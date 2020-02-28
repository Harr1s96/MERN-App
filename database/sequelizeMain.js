const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("userDB", "dbuser", "password", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const UserModel = sequelize.define("user",
    {
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

UserModel.sync({force: true})
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports = UserModel;
