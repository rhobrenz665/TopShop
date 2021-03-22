import { ActionType } from '../action-types';

export interface CartAddItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface CartAddItemAction {
  type: ActionType.CART_ADD_ITEM;
  payload: CartAddItem;
}

export interface CartRemoveItemAction {
  type: ActionType.CART_REMOVE_ITEM;
  payload: string;
}

export interface CartShippingAddressAction {
  type: ActionType.CART_SAVE_SHIPPING_ADDRESS;
  payload: ShippingAddress;
}

export interface CartPaymentMethodAction {
  type: ActionType.CART_SAVE_PAYMENT_METHOD;
  payload: string;
}
