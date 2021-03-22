import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { CartAction } from '../actions';

export const addToCart = (id: string, qty: number) => async (
  dispatch: Dispatch<CartAction>,
  getState: any
) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: ActionType.CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    dispatch({
      type: ActionType.CART_REMOVE_ITEM,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeFromCart = (id: string) => async (
  dispatch: Dispatch<CartAction>,
  getState: any
) => {
  dispatch({
    type: ActionType.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data: any) => async (
  dispatch: Dispatch<CartAction>
) => {
  dispatch({
    type: ActionType.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data: string) => async (
  dispatch: Dispatch<CartAction>
) => {
  dispatch({
    type: ActionType.CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
