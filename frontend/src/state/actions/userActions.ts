import { ActionType } from '../action-types';

export interface User {
  _id: string | null;
  name: string | null;
  email: string | null;
  isAdmin: string | null;
  token: string | null;
}

export interface LoginRequestAction {
  type: ActionType.USER_LOGIN_REQUEST;
}

export interface LoginSuccessAction {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: User;
}

export interface LoginFailAction {
  type: ActionType.USER_LOGIN_FAIL;
  payload: string;
}

export interface LogoutAction {
  type: ActionType.USER_LOGOUT;
}
