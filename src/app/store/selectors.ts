import { createFeatureSelector, createSelector } from '@ngrx/store'

export const selectAuthState = createFeatureSelector<any>('auth')

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
)
