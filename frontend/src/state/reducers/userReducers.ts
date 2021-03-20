import { ActionType } from '../action-types';
import {
  UserLoginAction,
  UserRegisterAction,
  UserDetailsAction,
} from '../actions';
import { User, UserDetails } from '../actions/userActions';

interface UserState {
  userInfo: User;
  loading?: boolean;
  error?: string;
}

interface UserDetailsState {
  user: UserDetails;
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

const userDetails = {
  _id: null,
  name: null,
  email: null,
  isAdmin: null,
};

const initialState: UserState = {
  userInfo,
  loading: false,
};

export const userLoginReducer = (
  state: UserState = initialState,
  action: UserLoginAction
): UserState => {
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
  state: UserState = initialState,
  action: UserRegisterAction
): UserState => {
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

export const userDetailsReducer = (
  state: UserDetailsState = { user: userDetails, loading: false },
  action: UserDetailsAction
): UserDetailsState => {
  switch (action.type) {
    case ActionType.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case ActionType.USER_DETAILS_FAIL:
      return {
        user: userDetails,
        loading: false,
        error: action.payload,
      };
    case ActionType.USER_DETAILS_RESET:
      return { user: userDetails };
    default:
      return state;
  }
};
