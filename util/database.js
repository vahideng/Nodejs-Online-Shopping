const Sequelize = require('sequelize');
const sequelize = new Sequelize('onlineshope', 'root', 'Leader99%', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
