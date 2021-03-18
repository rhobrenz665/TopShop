import { ActionType } from '../action-types';
import { CartAction } from '../actions';
import { CartAddItem } from '../actions/cartActions';

interface CartState {
  cartItems: CartAddItem[];
}

const cartInitialState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartState = cartInitialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case ActionType.CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find(
        (x: CartAddItem) => x.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: CartAddItem) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
