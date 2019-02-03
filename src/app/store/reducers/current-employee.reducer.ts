import * as CurrentEmployeeActions from '../actions/current-employee.actions'
import { CurrentEmployee } from '@models/current-employee.model'

import {
  CurrentEmployeeActionTypes
} from '../actions/current-employee.actions'

export const initialState: CurrentEmployee = {
  employee: null,
  payslips: []
}

export function currentEmployeeReducer(state: CurrentEmployee = initialState, actions: CurrentEmployeeActions.CurrentEmployeeActions ): CurrentEmployee {
  switch (actions.type) {
    case CurrentEmployeeActionTypes.CurrentEmployeeLoaded:
      return actions.payload.employee && actions.payload.payslips ? actions.payload : state

    case CurrentEmployeeActionTypes.CurrentEmployeeAddPayslip:
      return {
        ...state,
        payslips: [
          ...state.payslips,
          actions.payload
        ]
      }
    
    case CurrentEmployeeActionTypes.CurrentEmployeeDeletePayslip:
      return {
        ...state,
        payslips: state.payslips.filter(payslip => payslip.id !== actions.payslipId)
      }

    case CurrentEmployeeActionTypes.CurrentEmployeeCleared:
      return initialState

    case CurrentEmployeeActionTypes.CurrentEmployeeCancelled:
      return initialState


    default:
      return state
  }
}
