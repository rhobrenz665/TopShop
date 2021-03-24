import { ActionType } from '../action-types';
import {
  UserLoginAction,
  UserRegisterAction,
  UserDetailsAction,
  UpdateProfileAction,
} from '../actions';
import { User, UserDetails } from '../actions/userActions';

interface UserState {
  userInfo?: User;
  loading?: boolean;
  error?: string;
}

interface UserDetailsState {
  user: UserDetails;
  loading?: boolean;
  error?: string;
}

interface UpdateProfileState {
  userInfo?: any;
  loading?: boolean;
  error?: string;
  success?: boolean;
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
      return { loading: true };
    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ActionType.USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ActionType.USER_LOGOUT:
      return {};
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
      return { loading: true };
    case ActionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ActionType.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ActionType.USER_LOGOUT:
      return {};
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

export const userUpdateProfileReducer = (
  state: UpdateProfileState = {},
  action: UpdateProfileAction
): UpdateProfileState => {
  switch (action.type) {
    case ActionType.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case ActionType.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case ActionType.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case ActionType.USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (
  state: any = { users: [] },
  action: any
): any => {
  switch (action.type) {
    case ActionType.USER_LIST_REQUEST:
      return { loading: true };
    case ActionType.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case ActionType.USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case ActionType.USER_LIST_RESET:
      return {
        users: [],
      };
    default:
      return state;
  }
};
