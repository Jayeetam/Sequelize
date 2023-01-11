const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Jayeeta', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
