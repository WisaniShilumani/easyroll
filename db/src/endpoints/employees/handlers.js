const db = require('./db')
const response = require('../../shared/handlers/responses')

const employees = async (event) => {
  const request = await db.employees()

  if (request.success) {  
    return response.ok(request.body)
  }

  return response.invalid(request.body)
}

const updateEmployee = async (event) => {
  const data = JSON.parse(event.body)
  const request = await db.updateEmployee(+event.pathParameters.employeeId, data)
  return response.ok(request.body)
}

module.exports = {
  employees,
  updateEmployee
}
