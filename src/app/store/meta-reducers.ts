import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store'
import { localStorageSync } from 'ngrx-store-localstorage'
import { AuthState, authReducer } from './reducers/auth.reducer'
import { employeesReducer } from './reducers/employees.reducer'
import { currentEmployeeReducer } from './reducers/current-employee.reducer'
import { Employee } from '@models/employee.model'
import { CurrentEmployee } from '@models/current-employee.model'

const FEATURE_NAME = 'woolex-sale-roster-cache'
const STORE_KEYS_TO_PERSIST = [
  'auth',
  'employees',
  'currentEmployee'
]

export interface CachedState {
  auth: AuthState,
  employees: Employee[],
  currentEmployee: CurrentEmployee
}

export const reducers: ActionReducerMap<CachedState> = {
  auth: authReducer,
  employees: employeesReducer,
  currentEmployee: currentEmployeeReducer
}

export const getCachedState = createFeatureSelector<CachedState>(FEATURE_NAME)

export function localStorageSyncReducer(reducer: ActionReducer<CachedState>): ActionReducer<CachedState> {
  return localStorageSync({
    keys: STORE_KEYS_TO_PERSIST,
    rehydrate: true,
  })(reducer)
}

export const metaReducers: Array<MetaReducer<CachedState, Action>> = [localStorageSyncReducer]
