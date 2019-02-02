import * as faker from 'faker'
import { Payslip } from '../models/payslip.model'

const payslips: Payslip[] = []
for (let i = 1; i < 200; i++) {
  const payslip = {
    id: i,
    employeeId: faker.random.number({min: 0, max: 20}),
    period: faker.date.month(),
    grossIncome: faker.random.number({ min: 10000, max: 100000 })
  }

  payslips.push(payslip)
}

export { payslips }
