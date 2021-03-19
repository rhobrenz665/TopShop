import { combineReducers } from 'redux';
import { productsListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducers';
import { userLoginReducer, userRegisterReducer } from './userReducers';
const reducers = combineReducers({
  productList: productsListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
