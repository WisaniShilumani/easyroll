import { EmployeesComponent } from '../pages/employees/employees.component'
import { EmployeeDetailsComponent } from '../pages/employee-details/employee-details.component'
import { LoginComponent } from '../pages/login/login.component'
import { EmployeeTableComponent } from '../components/employee-table/employee-table.component'
import { TableHeaderComponent } from '../components/employee-table/table-header/table-header.component'
import { TableRowComponent } from '../components/employee-table/table-row/table-row.component'
import { MainNavComponent } from '../components/main-nav/main-nav.component'
import { PayslipTableComponent } from '../components/payslip-table/payslip-table.component'
import { PayslipTableHeaderComponent } from '../components/payslip-table/payslip-table-header/payslip-table-header.component'
import { PayslipRowComponent } from '../components/payslip-table/payslip-row/payslip-row.component'
import { PayslipSummaryComponent } from '../components/payslip-summary/payslip-summary.component'

export const navComponents = [
  MainNavComponent
]

export const employeeTableComponents = [
  EmployeeTableComponent,
  TableHeaderComponent,
  TableRowComponent
]

export const payslipTableComponents = [
  PayslipTableComponent,
  PayslipTableHeaderComponent,
  PayslipRowComponent,
  PayslipSummaryComponent
]

export const pageComponents = [
  EmployeeDetailsComponent,
  EmployeesComponent,
  LoginComponent
]
