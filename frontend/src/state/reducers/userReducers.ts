import { ActionType } from '../action-types';
import { UserLoginAction, UserRegisterAction } from '../actions';
import { User } from '../actions/userActions';

interface UserLoginState {
  userInfo: User;
  loading?: boolean;
  error?: string;
}

const userInfo = {
  _id: null,
  name: null,
  email: null,
  isAdmin: null,
  token: null,
};

const initialState: UserLoginState = {
  userInfo,
  loading: false,
};

export const userLoginReducer = (
  state: UserLoginState = initialState,
  action: UserLoginAction
): UserLoginState => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ActionType.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.USER_LOGOUT:
      return { ...state, userInfo };
    default:
      return state;
  }
};

export const userRegisterReducer = (
  state: UserLoginState = initialState,
  action: UserRegisterAction
): UserLoginState => {
  switch (action.type) {
    case ActionType.USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ActionType.USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
