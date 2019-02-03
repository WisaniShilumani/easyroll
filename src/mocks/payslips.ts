import * as faker from 'faker'
import { Payslip } from '../models/payslip.model'

const payslips: Payslip[] = [
  {
    id: 2001,
    employeeId: 73,
    period: faker.date.between('2018-03-01', '2018-03-01')
  },
  {
    id: 2002,
    employeeId: 74,
    period: faker.date.between('2018-03-01', '2019-03-01')
  }
]

for (let i = 1; i < 2000; i++) {
  const payslip = {
    id: i,
    employeeId: faker.random.number({min: 0, max: 20}),
    period: faker.date.between('2015-01-01', '2019-01-01')
  }

  payslips.push(payslip)
}

export { payslips }
