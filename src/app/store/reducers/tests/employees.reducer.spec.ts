import * as employeesReducer from '../employees.reducer'
import * as employeesActions from '../../actions/employees.actions'
import { employees } from '@mocks/employees'

describe('employeesReducer', () => {
  describe('Undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = employeesReducer
      const action = {
        type: null
      }

      const state = employeesReducer.employeesReducer(undefined, action)
      expect(state).toBe(initialState)
    })
  })

  describe('Load employees', () => {
    it('should load all the employees', () => {
      const { initialState } = employeesReducer
      const action = new employeesActions.EmployeesLoaded(employees)
      const state = employeesReducer.employeesReducer(initialState, action)
      expect(state).toEqual(employees)
    })
  })

  describe('Clear employees', () => {
    it('should clear all the employees', () => {
      const { initialState } = employeesReducer
      const action = new employeesActions.EmployeesCleared()
      const state = employeesReducer.employeesReducer(initialState, action)
      expect(state).toEqual(initialState)
    })
  })
})
