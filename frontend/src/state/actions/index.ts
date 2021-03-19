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
} from './userActions';

export type ProductAction =
  | ProductListRequestAction
  | ProductFailAction
  | ProductSuccessAction
  | ProductDetailsFailAction
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction;

export type CartAction = CartAddItemAction | CartRemoveItemAction;

export type UserAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction;
