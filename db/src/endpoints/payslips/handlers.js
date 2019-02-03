const db = require('./db')
const response = require('../../shared/handlers/responses')

const payslips = async (event) => {
  const request = await db.payslips(+event.pathParameters.employeeId)

  if (request.success) {  
    return response.ok(request.body)
  }

  return response.invalid(request.body)
}

const createPayslip = async (event) => {
  const data = JSON.parse(event.body)
  const paymentDate = new Date(data.paymentDate)
  const request = await db.createPayslip(+event.pathParameters.employeeId, paymentDate)
  return response.ok(request.body)
}

module.exports = {
  payslips,
  createPayslip
}
