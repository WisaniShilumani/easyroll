import * as faker from 'faker'
import { Payslip } from '../models/payslip.model'

const payslips: Payslip[] = []
payslips.push({
  id: 2001,
  employeeId: 73,
  period: 'August',
  annualIncome: 60050
})
for (let i = 1; i < 2000; i++) {
  const payslip = {
    id: i,
    employeeId: faker.random.number({min: 0, max: 20}),
    period: faker.date.month(),
    annualIncome: faker.random.number({ min: 10000, max: 100000 })
  }

  payslips.push(payslip)
}

export { payslips }
