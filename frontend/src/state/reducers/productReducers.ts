import { ActionType } from '../action-types';
import { ProductAction } from '../actions';
import { Products } from '../index';

interface ProductState {
  products: Products[];
  loading: boolean;
  error?: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const reducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ActionType.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ActionType.PRODUCT_SUCCESS:
      return { loading: false, products: action.payload };
    case ActionType.PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};

export default reducer;
