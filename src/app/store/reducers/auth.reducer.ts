import { AuthActionTypes, Login, Logout } from '../actions/auth.actions'

export interface AuthState {
  loggedIn: boolean
}

export const initialState: AuthState = {
  loggedIn: false
}

export function authReducer(state = initialState, action: Login | Logout): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
      return { loggedIn: true }
    case AuthActionTypes.LogoutAction:
      return { loggedIn: false }
    default:
      return state
  }
}
