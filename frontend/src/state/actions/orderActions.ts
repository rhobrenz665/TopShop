import { ActionType } from '../action-types';
import { CartAddItem, ShippingAddress } from './cartActions';

export interface OrderCreate {
  orderItems: CartAddItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice?: number;
  shippingPrice?: number;
  taxPrice?: number;
  totalPrice?: number;
  _id?: string;
  user?: {
    _id: string;
    name: string;
    email: string;
  };
  paidAt?: string;
  isPaid?: boolean;
  isDelivered?: boolean;
}

export interface OrderCreateRequestAction {
  type: ActionType.ORDER_CREATE_REQUEST;
}

export interface OrderCreateSuccessAction {
  type: ActionType.ORDER_CREATE_SUCCESS;
  payload: OrderCreate;
}
export interface OrderCreateFailAction {
  type: ActionType.ORDER_CREATE_FAIL;
  payload: string;
}

export interface OrderDetailsRequestAction {
  type: ActionType.ORDER_DETAILS_REQUEST;
}

export interface OrderDetailsSuccessAction {
  type: ActionType.ORDER_DETAILS_SUCCESS;
  payload: any;
}
export interface OrderDetailsFailAction {
  type: ActionType.ORDER_DETAILS_FAIL;
  payload: string;
}

export interface OrderPayRequestAction {
  type: ActionType.ORDER_PAY_REQUEST;
}

export interface OrderPaySuccessAction {
  type: ActionType.ORDER_PAY_SUCCESS;
  payload: any;
}
export interface OrderPayFailAction {
  type: ActionType.ORDER_PAY_FAIL;
  payload: string;
}
export interface OrderPayResetAction {
  type: ActionType.ORDER_PAY_RESET;
}
