const Sequelize = require("sequelize");
const userModel = require("./userModel");

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

const user = userModel(sequelize, Sequelize);

sequelize.sync({force: true})
    .then(() => {
        console.log(`Database & tables created!`);
    });

module.exports = user;
