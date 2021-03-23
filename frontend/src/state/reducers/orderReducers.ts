import { ActionType } from '../action-types';
import { OrderAction } from '../actions';
import { OrderCreate } from '../actions/orderActions';

interface OrderState {
  order: OrderCreate;
  loading?: boolean;
  success?: boolean;
  error?: string;
}

const createOrderState = {
  order: {
    orderItems: [],
    shippingAddress: {
      address: '',
      city: '',
      country: '',
      postalCode: '',
    },
    paymentMethod: 'PayPal',
    // itemsPrice: 0,
    // shippingPrice: 0,
    // taxPrice: 0,
    // totalPrice: 0,
    // isPaid: false,
    // isDelivered: false,
  },
};

export const orderCreateReducer = (
  state: OrderState = createOrderState,
  action: OrderAction
): OrderState => {
  switch (action.type) {
    case ActionType.ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ActionType.ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state: OrderState = createOrderState,
  action: OrderAction
): OrderState => {
  switch (action.type) {
    case ActionType.ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionType.ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case ActionType.ORDER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
