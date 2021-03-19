import { ActionType } from '../action-types';
import { UserAction } from '../actions';
import { User } from '../actions/userActions';

interface UserLoginState {
  userInfo: User | null;
  loading?: boolean;
  error?: string;
}

const initialState: UserLoginState = {
  userInfo: {
    _id: null,
    name: null,
    email: null,
    isAdmin: null,
    token: null,
  },
  loading: false,
};

export const userLoginReducer = (
  state: UserLoginState = initialState,
  action: UserAction
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
      return { userInfo: null };
    default:
      return state;
  }
};
