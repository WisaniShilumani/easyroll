import * as faker from 'faker'
import { Employee } from '../models/employee.model'

const employees: Employee[] = []
employees.push({
  id: 73,
  firstName: 'Wisani',
  lastName: 'Shilumani',
  annualIncome: faker.random.number({ min: 10000, max: 100000 }),
  pensionContribution: 9,
  paymentDate: faker.date.between('2015-01-01', '2019-01-01')
})

for (let i = 1; i < 72; i++) {
  const employee = {
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    annualIncome: faker.random.number({ min: 10000, max: 100000 }),
    pensionContribution: faker.random.number({ min: 0, max: 50 }),
    paymentDate: faker.date.between('2015-01-01', '2019-01-01')
  }

  employees.push(employee)
}

export { employees }
