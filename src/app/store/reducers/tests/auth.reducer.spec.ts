import * as authReducer from '../auth.reducer'
import * as authActions from '../../actions/auth.actions'

describe('AuthReducer', () => {
  describe('Undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = authReducer
      const action = {
        type: null
      }

      const state = authReducer.authReducer(undefined, action)
      expect(state).toBe(initialState)
    })
  })

  describe('Login action', () => {
    it('should set loggedIn to true and set a user object', () => {
      const { initialState } = authReducer
      const action = new authActions.Login()
      const state = authReducer.authReducer(initialState, action)
      expect(state.loggedIn).toEqual(true)
    })
  })

  describe('Logout action', () => {
    it('should set loggedIn to false and clear the user object', () => {
      const { initialState } = authReducer
      const action = new authActions.Logout()
      const state = authReducer.authReducer(initialState, action)
      expect(state.loggedIn).toEqual(false)
    })
  })
})
