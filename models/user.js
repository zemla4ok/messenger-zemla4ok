'use strict';

module.exports = (Sequelize, sequelize) => {
    return sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        login: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        passwort: {
            type: Sequelize.STRING
        }
    })
}