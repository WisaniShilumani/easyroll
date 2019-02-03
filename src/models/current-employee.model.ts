import { Payslip } from './payslip.model'
import { Employee } from './employee.model'

export interface CurrentEmployee {
  employee: Employee
  payslips: Payslip[]
}
