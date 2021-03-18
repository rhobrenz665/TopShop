import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const getItems: string | null = localStorage.getItem('cartItems');

const cartItemsFromStorage = getItems ? JSON.parse(getItems) : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
