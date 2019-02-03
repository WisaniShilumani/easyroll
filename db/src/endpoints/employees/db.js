const dbQueries = require('../../../config/db-queries')
const db = { dbQueries }

db.employees = async () => {
  try {
    const query = 'SELECT * FROM employees'
    const employees = await db.dbQueries.select(query, dbQueries.db)

    return {
      success: true,
      body: employees
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}

db.updateEmployee = async (employeeId, data) => {
  try {
    const keys = Object.keys(data)
    const sets = keys.map(key => `"${key}" = '${data[key]}'`).join(',')
    const query = `UPDATE employees SET ${sets} WHERE "id" = :employeeId`
    await db.dbQueries.update(query, { employeeId }, dbQueries.db)

    return {
      success: true,
      body: {}
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}

module.exports = db
