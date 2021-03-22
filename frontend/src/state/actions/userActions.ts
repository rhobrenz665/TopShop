import { ActionType } from '../action-types';

export interface User {
  _id: string | null;
  name: string | null;
  email: string | null;
  isAdmin: string | null;
  token: string | null;
}

export interface UserDetails {
  _id: string | null;
  name: string | null;
  email: string | null;
  isAdmin: string | null;
}

// User Login
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

// User Register
export interface RegisterRequestAction {
  type: ActionType.USER_REGISTER_REQUEST;
}

export interface RegisterSuccessAction {
  type: ActionType.USER_REGISTER_SUCCESS;
  payload: User;
}

export interface RegisterFailAction {
  type: ActionType.USER_REGISTER_FAIL;
  payload: string;
}

export interface LogoutAction {
  type: ActionType.USER_LOGOUT;
}

// User Details
export interface DetailsRequestAction {
  type: ActionType.USER_DETAILS_REQUEST;
}

export interface DetailsSuccessAction {
  type: ActionType.USER_DETAILS_SUCCESS;
  payload: User;
}

export interface DetailsFailAction {
  type: ActionType.USER_DETAILS_FAIL;
  payload: string;
}

export interface DetailsResetAction {
  type: ActionType.USER_DETAILS_RESET;
}

// update profile
export interface UpdateProfileRequestAction {
  type: ActionType.USER_UPDATE_PROFILE_REQUEST;
}

export interface UpdateProfileSuccessAction {
  type: ActionType.USER_UPDATE_PROFILE_SUCCESS;
  payload: User;
}

export interface UpdateProfileFailAction {
  type: ActionType.USER_UPDATE_PROFILE_FAIL;
  payload: string;
}

export interface UpdateProfileResetAction {
  type: ActionType.USER_UPDATE_PROFILE_RESET;
}
