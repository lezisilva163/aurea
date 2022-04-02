const Sequelize = require('sequelize');
const database = require('../../database');

const User = database.define('user', {
    id: {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    is_admin: {
        type : Sequelize.BOOLEAN,
        allowNull : false
    },
    name: {
        type : Sequelize.STRING,
        allowNull : false
    },
    email: {
        type : Sequelize.STRING,
        allowNull : false
    },
    password: {
        type : Sequelize.STRING,
        allowNull : false
    }
});

module.exports = User;