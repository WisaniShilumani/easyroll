import { Action } from '@ngrx/store'
import { CurrentEmployee } from '@models/current-employee.model'
import { Payslip } from '@models/payslip.model'
import { Error } from '@models/handlers/error.model'

export enum CurrentEmployeeActionTypes {
  CurrentEmployeeLoaded = '[CURR EMPLOYEE] loaded',
  CurrentEmployeeAddPayslip = '[CURR EMPLOYEE] add payslip',
  CurrentEmployeeDeletePayslip = '[CURR EMPLOYEE] remove payslip',
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

export class CurrentEmployeeDeletePayslip implements Action {
  readonly type = CurrentEmployeeActionTypes.CurrentEmployeeDeletePayslip
  constructor(public payslipId: number) {}
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
  | CurrentEmployeeDeletePayslip
  | CurrentEmployeeLoaded
  | CurrentEmployeeCancelled
  | CurrentEmployeeCleared
