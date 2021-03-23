import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { OrderAction } from '../actions';
import { OrderCreate } from '../actions/orderActions';

export const createOrder = (order: OrderCreate) => async (
  dispatch: Dispatch<OrderAction>,
  getState: any
) => {
  try {
    dispatch({
      type: ActionType.ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders/`, order, config);

    dispatch({
      type: ActionType.ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrderDetails = (id: string) => async (
  dispatch: Dispatch<OrderAction>,
  getState: any
) => {
  try {
    dispatch({
      type: ActionType.ORDER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch({
      type: ActionType.ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};