const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aurea connection', 'root', '', { 
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('Conectado');
} catch (error) {
    console.error('Não foi possível conectar :', error);
}