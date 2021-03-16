import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { ProductAction } from '../actions';

export const listProducts = () => async (dispatch: Dispatch<ProductAction>) => {
  try {
    dispatch({
      type: ActionType.PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get('api/products');

    dispatch({
      type: ActionType.PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
