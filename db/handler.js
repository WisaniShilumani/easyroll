const { employees, updateEmployee } = require('./src/endpoints/employees/handlers')
const { payslips, createPayslip } = require('./src/endpoints/payslips/handlers')

module.exports = { employees, updateEmployee, payslips, createPayslip }
