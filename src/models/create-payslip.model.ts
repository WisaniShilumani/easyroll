export interface CreatePayslip {
  id: number
  employeeId: number
  name: string
  startDate: Date
  annualIncomeSnapshot: number
  pensionContributionSnapshot: number
}
