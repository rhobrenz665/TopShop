import { ActionType } from '../action-types';
import { ProductAction } from '../actions';
import { Products } from '../index';

interface ProductState {
  products: Products[];
  loading: boolean;
  error?: string | null;
}

interface ProductDetailsState {
  product: Products;
  loading?: boolean;
  error?: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productInitialState = {
  product: {
    _id: '',
    name: '',
    image: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
};

export const productsListReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ActionType.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ActionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ActionType.PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state: ProductDetailsState = productInitialState,
  action: ProductAction
): ProductDetailsState => {
  switch (action.type) {
    case ActionType.PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ActionType.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ActionType.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productDeleteReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case ActionType.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case ActionType.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ActionType.PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case ActionType.PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case ActionType.PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ActionType.PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ActionType.PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (
  state: any = { product: {} },
  action: any
) => {
  switch (action.type) {
    case ActionType.PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case ActionType.PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ActionType.PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ActionType.PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};
