import {
  ProductListRequestAction,
  ProductFailAction,
  ProductSuccessAction,
  ProductDetailsFailAction,
  ProductDetailsRequestAction,
  ProductDetailsSuccessAction,
  ProductDeleteRequestAction,
  ProductDeleteSuccessAction,
  ProductDeleteFailAction,
  ProductCreateRequestAction,
  ProductCreateSuccessAction,
  ProductCreateFailAction,
  ProductCreateResetAction,
  ProductUpdateRequestAction,
  ProductUpdateSuccessAction,
  ProductUpdateFailAction,
  ProductUpdateResetAction,
  ProductTopFailAction,
  ProductTopRequestAction,
  ProductTopSuccessAction,
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
  UserListResetAction,
  UserListRequestAction,
  UserListSuccessAction,
  UserListFailAction,
  UserDeleteRequestAction,
  UserDeleteSuccessAction,
  UserDeleteFailAction,
} from './userActions';

import {
  OrderCreateSuccessAction,
  OrderCreateRequestAction,
  OrderCreateFailAction,
  OrderDetailsSuccessAction,
  OrderDetailsFailAction,
  OrderDetailsRequestAction,
  OrderPayRequestAction,
  OrderPaySuccessAction,
  OrderPayFailAction,
  OrderPayResetAction,
  OrderMyListRequestAction,
  OrderMyListSuccessAction,
  OrderMyListFailAction,
  OrderMyListResetAction,
  OrderListRequestAction,
  OrderListSuccessAction,
  OrderListFailAction,
} from './orderActions';

export type ProductAction =
  | ProductListRequestAction
  | ProductFailAction
  | ProductSuccessAction
  | ProductDetailsFailAction
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDeleteSuccessAction
  | ProductDeleteRequestAction
  | ProductDeleteFailAction
  | ProductCreateRequestAction
  | ProductCreateSuccessAction
  | ProductCreateFailAction
  | ProductCreateResetAction
  | ProductUpdateRequestAction
  | ProductUpdateSuccessAction
  | ProductUpdateFailAction
  | ProductUpdateResetAction
  | ProductTopFailAction
  | ProductTopRequestAction
  | ProductTopSuccessAction;

export type CartAction =
  | CartAddItemAction
  | CartRemoveItemAction
  | CartShippingAddressAction
  | CartPaymentMethodAction;

export type UserLoginAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | DetailsResetAction
  | OrderMyListResetAction
  | UserListResetAction;

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
  | OrderDetailsFailAction
  | OrderPayRequestAction
  | OrderPaySuccessAction
  | OrderPayFailAction
  | OrderPayResetAction
  | OrderMyListRequestAction
  | OrderMyListSuccessAction
  | OrderMyListFailAction
  | OrderMyListResetAction
  | OrderListRequestAction
  | OrderListSuccessAction
  | OrderListFailAction;

export type UserListAction =
  | UserListResetAction
  | UserListRequestAction
  | UserListSuccessAction
  | UserListFailAction;

export type UserDeleteAction =
  | UserDeleteRequestAction
  | UserDeleteSuccessAction
  | UserDeleteFailAction;
