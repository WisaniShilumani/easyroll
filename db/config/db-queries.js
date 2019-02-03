const db = require('./db')

const dbQueries = {}

dbQueries.db = db

dbQueries.select = async (query, db) => await db.sequelize.query(query, {
  type: db.sequelize.QueryTypes.SELECT
})

dbQueries.update = async (query, replacements, db) => await db.sequelize.query(query, {
  type: db.sequelize.QueryTypes.UPDATE,
  replacements
})

dbQueries.insert = async (query, replacements, db) => await db.sequelize.query(query, {
  type: db.sequelize.QueryTypes.INSERT,
  replacements
})

module.exports = dbQueries
