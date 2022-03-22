const Sequelize = require('sequelize');
const database = require('../../database');

const ProviderOrder = database.define('provider_order', {
    id: {
        type: Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull : false
    },
    provider_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    total_value: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    total_paid: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    first_payment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    first_payment_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    second_payment: {
        type: Sequelize.STRING,
        allowNull: true
    },
    second_payment_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    datasheet: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reference_product: {
        type: Sequelize.STRING,
        allowNull: false
    },
    received_order: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    deadline: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = ProviderOrder;