import { PayslipResolverService } from '../services/resolvers/payslip'
import { EmployeesResolverService } from '../services/resolvers/employees'
import { AuthGuard } from '../store/guards/auth.guard'

export const providers = [
  AuthGuard,
  PayslipResolverService,
  EmployeesResolverService
]
