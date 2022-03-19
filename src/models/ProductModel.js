const Sequelize = require('sequelize');
const database = require('../../database');

const Product = database.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    size : {
        type : Sequelize.CHAR,
        allowNull: false
    },
    quantity : {
        type : Sequelize.INTEGER,
        allowNull: false
    },
    color : {
        type : Sequelize.STRING,
        allowNull: false
    },
    value : {
        type : Sequelize.FLOAT,
        allowNull: false
    },
    provider : {
        type : Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;