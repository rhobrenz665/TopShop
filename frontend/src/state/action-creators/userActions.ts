import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { UserAction } from '../actions';

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<UserAction>
) => {
  try {
    dispatch({
      type: ActionType.USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({
      type: ActionType.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ActionType.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch: Dispatch<UserAction>) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: ActionType.USER_LOGOUT,
  });
};
