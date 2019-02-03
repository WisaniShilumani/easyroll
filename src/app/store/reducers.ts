import { authReducer } from './reducers/auth.reducer'
import { employeesReducer } from './reducers/employees.reducer'
import { currentEmployeeReducer } from './reducers/current-employee.reducer'

export const Reducers = {
  auth: authReducer,
  employees: employeesReducer,
  currentEmployee: currentEmployeeReducer
}
