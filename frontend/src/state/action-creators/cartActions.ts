import axios from 'axios';
import { Dispatch } from 'redux';
import { idText } from 'typescript';
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
