import { ActionType } from '../action-types';

export interface CartAddItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface CartAddItemAction {
  type: ActionType.CART_ADD_ITEM;
  payload: CartAddItem;
}

export interface CartRemoveItemAction {
  type: ActionType.CART_REMOVE_ITEM;
  payload: string;
}
