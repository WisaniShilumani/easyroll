const dbQueries = require('../../../config/db-queries')
const db = { dbQueries }

db.payslips = async (employeeId) => {
  try {
    const query = `SELECT * FROM payslips WHERE "employeeId" = ${employeeId}`
    const payslips = await db.dbQueries.select(query, dbQueries.db)

    return {
      success: true,
      body: payslips
    }
  } catch (error) {
    return {
      success: false,
      message: error.message
    }
  }
}

db.createPayslip = async (employeeId, paymentDate, annualIncomeSnapshot) => {
  try {
    const query = `
    INSERT INTO payslips
    ("employeeId", "annualIncomeSnapshot", "paymentDate")
    VALUES
    (:employeeId, :annualIncomeSnapshot, :paymentDate)`
    await db.dbQueries.insert(query, { employeeId, paymentDate, annualIncomeSnapshot }, dbQueries.db)

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
