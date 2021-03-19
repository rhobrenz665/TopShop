import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { UserRegisterAction, UserLoginAction } from '../actions';

export const login = (email: string, password: string) => async (
  dispatch: Dispatch<UserLoginAction>
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

export const logout = () => (dispatch: Dispatch<UserLoginAction>) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: ActionType.USER_LOGOUT,
  });
};

export const register = (
  name: string,
  email: string,
  password: string
) => async (dispatch: Dispatch<UserRegisterAction>) => {
  try {
    dispatch({
      type: ActionType.USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );

    dispatch({
      type: ActionType.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: ActionType.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ActionType.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
