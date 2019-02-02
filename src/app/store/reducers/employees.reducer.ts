import * as EmployeesActions from '../actions/employees.actions'
import { Employee } from '@models/employee.model'

import {
  EmployeesActionTypes
} from '../actions/employees.actions'

export const initialState: Employee[] = []

export function employeesReducer(state: Employee[] = initialState, actions: EmployeesActions.EmployeesActions ): Employee[] {
  switch (actions.type) {
    case EmployeesActionTypes.EmployeesLoaded:
      return actions.payload.length > 0 ? actions.payload : state

    case EmployeesActionTypes.EmployeesCancelled:
      return initialState

    case EmployeesActionTypes.EmployeesCleared:
      return initialState

    default:
      return state
  }
}
