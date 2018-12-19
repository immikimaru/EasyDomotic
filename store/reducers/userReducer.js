import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  GET_USER,
  LOGOUT_USER
} from "../actions/actionTypes";

const initialState = {
  user: {},
  domoticzUrl: null,
  authenticated: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case LOGOUT_USER:
      return initialState;
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
