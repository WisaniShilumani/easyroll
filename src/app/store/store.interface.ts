import { AuthState } from './reducers/auth.reducer'
import { CurrentEmployee } from '@models/current-employee.model'
import { Employee } from '@models/employee.model'

export interface AppState {
  employees: Employee[]
  currentEmployee: CurrentEmployee
  auth: AuthState
}
