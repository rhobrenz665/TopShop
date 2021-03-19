import {
  ProductListRequestAction,
  ProductFailAction,
  ProductSuccessAction,
  ProductDetailsFailAction,
  ProductDetailsRequestAction,
  ProductDetailsSuccessAction,
} from './productActions';

import { CartAddItemAction, CartRemoveItemAction } from './cartActions';

import {
  LoginRequestAction,
  LoginSuccessAction,
  LoginFailAction,
  LogoutAction,
  RegisterSuccessAction,
  RegisterFailAction,
  RegisterRequestAction,
} from './userActions';

export type ProductAction =
  | ProductListRequestAction
  | ProductFailAction
  | ProductSuccessAction
  | ProductDetailsFailAction
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction;

export type CartAction = CartAddItemAction | CartRemoveItemAction;

export type UserLoginAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction;

export type UserRegisterAction =
  | RegisterSuccessAction
  | RegisterFailAction
  | RegisterRequestAction
  | LoginSuccessAction;
