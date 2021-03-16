import { combineReducers } from 'redux';
import { productsListReducer, productDetailsReducer } from './productReducers';

const reducers = combineReducers({
  productList: productsListReducer,
  productDetails: productDetailsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
