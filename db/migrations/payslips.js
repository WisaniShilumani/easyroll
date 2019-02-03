'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payslips', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      annualIncomeSnapshot: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paymentDate: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payslips')
  }
}
