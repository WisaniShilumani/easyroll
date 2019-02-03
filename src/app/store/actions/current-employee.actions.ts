import { Action } from '@ngrx/store'
import { CurrentEmployee } from '@models/current-employee.model'
import { UpdateEmployee } from '@models/update-employee'
import { Payslip } from '@models/payslip.model'
import { Error } from '@models/handlers/error.model'

export enum CurrentEmployeeActionTypes {
  CurrentEmployeeLoaded = '[CURR EMPLOYEE] loaded',
  CurrentEmployeeAddPayslip = '[CURR EMPLOYEE] add payslip',
  CurrentEmployeeUpdateDetails = '[CURR EMPLOYEE] update details',
  CurrentEmployeeCleared = '[CURR EMPLOYEE] cleared',
  CurrentEmployeeCancelled = '[CURR EMPLOYEE] request cancelled',
}

export class CurrentEmployeeLoaded implements Action {
  readonly type = CurrentEmployeeActionTypes.CurrentEmployeeLoaded
  constructor(public payload: CurrentEmployee) {}
}

export class CurrentEmployeeAddPayslip implements Action {
  readonly type = CurrentEmployeeActionTypes.CurrentEmployeeAddPayslip
  constructor(public payload: Payslip) {}
}

export class CurrentEmployeeUpdateDetails implements Action {
  readonly type = CurrentEmployeeActionTypes.CurrentEmployeeUpdateDetails
  constructor(public employee: UpdateEmployee) {}
}

export class CurrentEmployeeCleared implements Action {
  readonly type = CurrentEmployeeActionTypes.CurrentEmployeeCleared
  constructor() {}
}

export class CurrentEmployeeCancelled implements Action {
  readonly type = CurrentEmployeeActionTypes.CurrentEmployeeCancelled
  constructor(public payload: { error: Error }) {}
}

export type CurrentEmployeeActions =
  | CurrentEmployeeAddPayslip
  | CurrentEmployeeUpdateDetails
  | CurrentEmployeeLoaded
  | CurrentEmployeeCancelled
  | CurrentEmployeeCleared
