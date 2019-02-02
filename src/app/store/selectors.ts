import { createFeatureSelector, createSelector } from '@ngrx/store'

export const selectAuthState = createFeatureSelector<any>('auth')
export const selectEmployeesState = createFeatureSelector<any>('employees')

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
)

export const getEmployee = (id: number) => createSelector(
  selectEmployeesState,
  employees => employees.find(employee => employee.id === id)
)
