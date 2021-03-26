import { ActionType } from '../action-types';
import {
  UserLoginAction,
  UserRegisterAction,
  UserDetailsAction,
  UserListAction,
  UpdateProfileAction,
  UserDeleteAction,
} from '../actions';
import { User, UserDetails } from '../actions/userActions';

interface UserState {
  userInfo: User;
  loading: boolean;
  error: string | null;
}

interface UserDetailsState {
  user: UserDetails;
  loading: boolean;
  error: string | null;
}

interface UserListState {
  users: UserDetails[] | [];
  loading: boolean;
  error: string | null;
}

interface UpdateProfileState {
  userInfo: User;
  loading: boolean;
  error: string | null;
  success?: boolean;
}

interface UserDeleteState {
  loading: boolean;
  success?: boolean;
  error: string | null;
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
  error: null,
};

export const userLoginReducer = (
  state: UserState = initialState,
  action: UserLoginAction
): UserState => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_LOGIN_SUCCESS:
      return { error: null, loading: false, userInfo: action.payload };
    case ActionType.USER_LOGIN_FAIL:
      return {
        userInfo,
        loading: false,
        error: action.payload,
      };
    case ActionType.USER_LOGOUT:
      return { loading: false, error: null, userInfo };
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
      return { error: null, loading: false, userInfo: action.payload };
    case ActionType.USER_REGISTER_FAIL:
      return {
        userInfo,
        loading: false,
        error: action.payload,
      };
    case ActionType.USER_LOGOUT:
      return {
        userInfo,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const userDetailsReducer = (
  state: UserDetailsState = { user: userDetails, loading: false, error: null },
  action: UserDetailsAction
): UserDetailsState => {
  switch (action.type) {
    case ActionType.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case ActionType.USER_DETAILS_FAIL:
      return {
        user: userDetails,
        loading: false,
        error: action.payload,
      };
    case ActionType.USER_DETAILS_RESET:
      return { user: userDetails, error: null, loading: false };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (
  state: UpdateProfileState = initialState,
  action: UpdateProfileAction
): UpdateProfileState => {
  switch (action.type) {
    case ActionType.USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_UPDATE_PROFILE_SUCCESS:
      return { ...state, success: true, userInfo: action.payload };
    case ActionType.USER_UPDATE_PROFILE_FAIL:
      return { userInfo, loading: false, error: action.payload };
    case ActionType.USER_UPDATE_PROFILE_RESET:
      return { userInfo, error: null, loading: false };
    default:
      return state;
  }
};

export const userListReducer = (
  state: UserListState = { users: [], error: null, loading: false },
  action: UserListAction
): UserListState => {
  switch (action.type) {
    case ActionType.USER_LIST_REQUEST:
      return { ...state, loading: true };
    case ActionType.USER_LIST_SUCCESS:
      return { error: null, loading: false, users: action.payload };
    case ActionType.USER_LIST_FAIL:
      return { ...state, error: action.payload };
    case ActionType.USER_LIST_RESET:
      return {
        users: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const userDeleteReducer = (
  state: UserDeleteState = { loading: false, error: null },
  action: UserDeleteAction
): UserDeleteState => {
  switch (action.type) {
    case ActionType.USER_DELETE_REQUEST:
      return { loading: true, error: null };
    case ActionType.USER_DELETE_SUCCESS:
      return { error: null, loading: false, success: true };
    case ActionType.USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userUpdateReducer = (
  state: any = { loading: false, error: null, user: {} },
  action: any
): any => {
  switch (action.type) {
    case ActionType.USER_UPDATE_REQUEST:
      return { loading: true, error: null };
    case ActionType.USER_UPDATE_SUCCESS:
      return { error: null, loading: false, success: true };
    case ActionType.USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ActionType.USER_UPDATE_RESET:
      return { loading: false, error: null, user: {} };
    default:
      return state;
  }
};
