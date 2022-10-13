module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define("tags", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // creator: {
        //     type: Sequelize.UUID
        // },
        name: {
            type: Sequelize.STRING
        },
    });

    return Tag;
};

// MyModel.init({
//     myUuid: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
//     },
// });