import { Action } from '@ngrx/store'

export enum AuthActionTypes {
  LoginAction = '[LOGIN] Logging in',
  LogoutAction = '[LOGOUT] Loggin out',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction
}

export type AuthActions = Login | Logout
