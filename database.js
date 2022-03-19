const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aurea', 'root', '', { 
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;