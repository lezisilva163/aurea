const Sequelize = require('sequelize');
const database = require('../../database');

const Provider = database.define('provider', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    whatsapp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    attendant: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: true
    }

});

module.exports = Provider; 