import { Action } from '@ngrx/store'
import { Employee } from '@models/employee.model'
import { Error } from '@models/handlers/error.model'

export enum EmployeesActionTypes {
  EmployeesRequested = '[EMPLOYEES] Employees list requested',
  EmployeesLoaded = '[EMPLOYEES] Employees list loaded',
  EmployeesCleared = '[EMPLOYEES] Employees list cleared',
  EmployeesCancelled = '[EMPLOYEES] Employees list request cancelled',
}

export class EmployeesRequested implements Action {
  readonly type = EmployeesActionTypes.EmployeesRequested
}

export class EmployeesLoaded implements Action {
  readonly type = EmployeesActionTypes.EmployeesLoaded
  constructor(public payload: Employee[]) {}
}

export class EmployeesCleared implements Action {
  readonly type = EmployeesActionTypes.EmployeesCleared
  constructor() {}
}

export class EmployeesCancelled implements Action {
  readonly type = EmployeesActionTypes.EmployeesCancelled
  constructor(public payload: { error: Error }) {}
}

export type EmployeesActions =
  | EmployeesRequested
  | EmployeesLoaded
  | EmployeesCancelled
  | EmployeesCleared
