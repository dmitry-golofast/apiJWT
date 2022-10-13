module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        // uid: {
        //     type: Sequelize.UUID
        // },
        email: {
            type: Sequelize.STRING()
        },
        password: {
            type: Sequelize.STRING()
        },
        nickname: {
            type: Sequelize.STRING()
        }
    });

    return User;
};