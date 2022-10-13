module.exports = (sequelize, Sequelize) => {
    const Usertag = sequelize.define("usertags", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // uid: {
        //     type: Sequelize.UUID
        // },
        name: {
            type: Sequelize.STRING()
        }
    });

    return Usertag;
};