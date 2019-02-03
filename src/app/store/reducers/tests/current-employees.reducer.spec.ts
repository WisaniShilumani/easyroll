import * as currentEmployeeReducer from '../current-employee.reducer'
import * as employeesActions from '../../actions/current-employee.actions'
import { CurrentEmployee } from '@models/current-employee.model'
import { employees } from '@mocks/employees'
import { payslips } from '@mocks/payslips'

describe('currentEmployeeReducer', () => {
  describe('Undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = currentEmployeeReducer
      const action = {
        type: null
      }

      const state = currentEmployeeReducer.currentEmployeeReducer(undefined, action)
      expect(state).toBe(initialState)
    })
  })

  describe('Load the current employee', () => {
    it('should load the current employee', () => {
      const { initialState } = currentEmployeeReducer
      const currentEmployee: CurrentEmployee = {
        employee: employees[0],
        payslips
      }

      const action = new employeesActions.CurrentEmployeeLoaded(currentEmployee)
      const state = currentEmployeeReducer.currentEmployeeReducer(initialState, action)
      expect(state).toEqual(currentEmployee)
    })
  })

  describe('Clear employees', () => {
    it('should clear the current employees data', () => {
      const { initialState } = currentEmployeeReducer
      const action = new employeesActions.CurrentEmployeeCleared()
      const state = currentEmployeeReducer.currentEmployeeReducer(initialState, action)
      expect(state).toEqual(initialState)
    })
  })

  describe('Add payslip', () => {
    it('should add a payslip to the current employees existing payslips', () => {
      const { initialState } = currentEmployeeReducer
      const action = new employeesActions.CurrentEmployeeAddPayslip(payslips[0])
      const state = currentEmployeeReducer.currentEmployeeReducer(initialState, action)
      expect(state.payslips).toEqual([payslips[0]])
    })
  })
})
