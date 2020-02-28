

module.exports = (sequelize, type) => {

    return sequelize.define("user", {
        username: {
            type: type.String,

            allowNull: false
        },
        email: {
            type: type.String,
            validate: {
                isEmail: true
            },
            primaryKey: true,
            allowNull: false
        },
        password: {
            type: type.String,
            allowNull: false
        }
    })
}

