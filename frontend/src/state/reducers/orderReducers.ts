import { ActionType } from '../action-types';
import { OrderAction } from '../actions';
import { OrderCreate } from '../actions/orderActions';

interface OrderState {
  order: OrderCreate;
  loading?: boolean;
  success?: boolean;
  error?: string;
}

const OrderInitialState = {
  order: {
    orderItems: [],
    shippingAddress: {
      address: '',
      city: '',
      country: '',
      postalCode: '',
    },
    paymentMethod: 'PayPal',
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    isPaid: false,
    isDelivered: false,
  },
};

export const orderCreateReducer = (
  state: OrderState = OrderInitialState,
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
  state: OrderState = OrderInitialState,
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

export const orderPayReducer = (state: any = {}, action: OrderAction): any => {
  switch (action.type) {
    case ActionType.ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ActionType.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ActionType.ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ActionType.ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderListMyReducer = (
  state: any = { orders: [] },
  action: OrderAction
): any => {
  switch (action.type) {
    case ActionType.ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case ActionType.ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ActionType.ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ActionType.ORDER_LIST_MY_RESET:
      return { orders: [] };
    default:
      return state;
  }
};
