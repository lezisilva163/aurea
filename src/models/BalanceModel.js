const Sequelize = require('sequelize');
const database = require('../../database');

const Balance = database.define('balance', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    month_value_sell: {
        type: Sequelize.DECIMAL(10,2)
    },
    retail_markup: {
        type: Sequelize.DECIMAL(10,2)
    },
    finance_cost: {
        type: Sequelize.DECIMAL(10,2)
    },
    operational_cost: {
        type: Sequelize.DECIMAL(10,2)
    },
    employee_cost: {
        type: Sequelize.DECIMAL(10,2)
    },
    tax_cnpj: {
        type: Sequelize.DECIMAL(10,2)
    },
    site: {
        type: Sequelize.DECIMAL(10,2)
    },
    packages: {
        type: Sequelize.DECIMAL(10,2)
    },
    gifts: {
        type: Sequelize.DECIMAL(10,2)
    },
    freight_cost: {
        type: Sequelize.DECIMAL(10,2)
    },
    cac: {
        type: Sequelize.DECIMAL(10,2)
    },
    calc_profit: {
        type: Sequelize.DECIMAL(10,2)
    }
});

module.exports = Balance;