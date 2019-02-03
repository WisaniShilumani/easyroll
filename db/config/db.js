const Sequelize = require('sequelize')
const sequelize = new Sequelize('easyroll', 'admin', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    handleDisconnects: true
  },
  dialectOptions: {
    requestTimeout: 100000
  },
  define: {
    freezeTableName: true
  }
})

module.exports = {
  sequelize,
  Sequelize
}
