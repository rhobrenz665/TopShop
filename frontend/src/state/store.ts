import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const getItems: string | null = localStorage.getItem('cartItems');

const getUserInfo: string | null = localStorage.getItem('userInfo');

const cartItemsFromStorage = getItems ? JSON.parse(getItems) : [];

const userInfoFromStorage = getUserInfo ? JSON.parse(getUserInfo) : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
