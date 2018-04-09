module.exports = (Sequelize, sequelize) => {
    return sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: Sequelize.STRING
        }
    })
}