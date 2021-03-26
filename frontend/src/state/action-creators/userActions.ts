import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import {
  UserRegisterAction,
  UserLoginAction,
  UserDetailsAction,
  UpdateProfileAction,
} from '../actions';

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
  dispatch({
    type: ActionType.USER_DETAILS_RESET,
  });
  dispatch({
    type: ActionType.ORDER_LIST_MY_RESET,
  });
  dispatch({
    type: ActionType.USER_LIST_RESET,
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

export const getUserDetails = (id: string) => async (
  dispatch: Dispatch<UserDetailsAction>,
  getState: any
) => {
  try {
    dispatch({
      type: ActionType.USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: ActionType.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user: any) => async (
  dispatch: Dispatch<UpdateProfileAction>,
  getState: any
) => {
  try {
    dispatch({
      type: ActionType.USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile/`, user, config);

    dispatch({
      type: ActionType.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUsers = () => async (
  dispatch: Dispatch<any>,
  getState: any
) => {
  try {
    dispatch({
      type: ActionType.USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/`, config);

    dispatch({
      type: ActionType.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionType.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id: string) => async (
  dispatch: Dispatch<any>,
  getState: any
) => {
  try {
    dispatch({
      type: ActionType.USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: ActionType.USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: ActionType.USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateUser = (user: any) => async (
  dispatch: Dispatch<any>,
  getState: any
) => {
  try {
    dispatch({
      type: ActionType.USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);

    dispatch({
      type: ActionType.USER_UPDATE_SUCCESS,
    });

    dispatch({
      type: ActionType.USER_DETAILS_SUCCESS,
      payload: data,
    });

    dispatch({ type: ActionType.USER_DETAILS_RESET });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: ActionType.USER_UPDATE_FAIL,
      payload: message,
    });
  }
};
