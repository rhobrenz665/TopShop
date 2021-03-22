import { ActionType } from '../action-types';
import { CartAction } from '../actions';
import { CartAddItem, ShippingAddress } from '../actions/cartActions';

interface CartState {
  cartItems: CartAddItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice?: number;
  shippingPrice?: number;
  taxPrice?: number;
  totalPrice?: number;
}

const cartInitialState = {
  cartItems: [],
  shippingAddress: {
    address: '',
    city: '',
    country: '',
    postalCode: '',
  },
  paymentMethod: '',
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
    case ActionType.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload),
      };
    case ActionType.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case ActionType.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
