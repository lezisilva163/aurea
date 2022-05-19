const Sequelize = require('sequelize');
const database = require('../../database');

const ProductExchange = database.define('product_exchange',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    phone : {
        type : Sequelize.STRING,
        allowNull : false
    },
    date : {
        type : Sequelize.DATE,
        allowNull : false
    },
    product_id : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    description : {
        type : Sequelize.STRING,
        allowNull : true
    },
    product_image : {
        type : Sequelize.STRING,
        allowNull : true
    }
    
});

module.exports = ProductExchange;