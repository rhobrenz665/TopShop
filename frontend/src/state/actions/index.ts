import {
  ProductListRequestAction,
  ProductFailAction,
  ProductSuccessAction,
  ProductDetailsFailAction,
  ProductDetailsRequestAction,
  ProductDetailsSuccessAction,
} from './productActions';

import {
  CartAddItemAction,
  CartRemoveItemAction,
  CartShippingAddressAction,
  CartPaymentMethodAction,
} from './cartActions';

import {
  LoginRequestAction,
  LoginSuccessAction,
  LoginFailAction,
  LogoutAction,
  RegisterSuccessAction,
  RegisterFailAction,
  RegisterRequestAction,
  DetailsRequestAction,
  DetailsSuccessAction,
  DetailsFailAction,
  DetailsResetAction,
  UpdateProfileRequestAction,
  UpdateProfileFailAction,
  UpdateProfileSuccessAction,
  UpdateProfileResetAction,
} from './userActions';

import {
  OrderCreateSuccessAction,
  OrderCreateRequestAction,
  OrderCreateFailAction,
  OrderDetailsSuccessAction,
  OrderDetailsFailAction,
  OrderDetailsRequestAction,
} from './orderActions';

export type ProductAction =
  | ProductListRequestAction
  | ProductFailAction
  | ProductSuccessAction
  | ProductDetailsFailAction
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction;

export type CartAction =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartShippingAddressAction
  | CartPaymentMethodAction;

export type UserLoginAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction;

export type UserRegisterAction =
  | RegisterSuccessAction
  | RegisterFailAction
  | RegisterRequestAction
  | LoginSuccessAction
  | LogoutAction;

export type UserDetailsAction =
  | DetailsRequestAction
  | DetailsSuccessAction
  | DetailsFailAction
  | DetailsResetAction;

export type UpdateProfileAction =
  | UpdateProfileRequestAction
  | UpdateProfileFailAction
  | UpdateProfileSuccessAction
  | UpdateProfileResetAction;

export type OrderAction =
  | OrderCreateSuccessAction
  | OrderCreateRequestAction
  | OrderCreateFailAction
  | OrderDetailsSuccessAction
  | OrderDetailsRequestAction
  | OrderDetailsFailAction;
