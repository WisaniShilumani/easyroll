import * as faker from 'faker'
import { Employee } from '../models/employee.model'

const employees: Employee[] = []
for (let i = 1; i < 20; i++) {
  const employee = {
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    pension: faker.random.number({ min: 0, max: 50 }),
    paymentDate: faker.date.between('2015-01-01', '2019-01-01')
  }

  employees.push(employee)
}

export { employees }
