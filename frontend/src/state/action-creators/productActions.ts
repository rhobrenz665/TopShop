import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { ProductAction } from '../actions';

export const listProducts = () => async (dispatch: Dispatch<ProductAction>) => {
  try {
    dispatch({
      type: ActionType.PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/products');

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

export const listProductDetails = (id: string) => async (
  dispatch: Dispatch<ProductAction>
) => {
  try {
    dispatch({
      type: ActionType.PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: ActionType.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: any
) => {
  try {
    dispatch({
      type: ActionType.PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch({
      type: ActionType.PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ActionType.PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
