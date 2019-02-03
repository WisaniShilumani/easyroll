'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'employees',
      [
        {
          firstName: 'Andrew',
          lastName: 'Baker',
          annualIncome: 60050,
          pensionContribution: 9,
          paymentDate: new Date('2019-03-01')
        },
        {
          firstName: 'Chris',
          lastName: 'Davies',
          annualIncome: 120000,
          pensionContribution: 10,
          paymentDate: new Date('2019-03-01')
        }
      ],
      {}
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {})
  }
}
