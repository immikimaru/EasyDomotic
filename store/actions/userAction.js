import {
  SET_USER,
  LOGOUT_USER,
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR
} from "./actionTypes";
import { Alert, AsyncStorage } from "react-native";
import axios from "axios";

const URL = "http://192.168.1.101:3000";

export const setUser = user => {
  return {
    type: SET_USER,
    user: user
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

export const loginUser = (email, password) => {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/login`, { email, password });
      dispatch({ type: AUTHENTICATED });
      AsyncStorage.setItem("user", res.data.token);
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    }
  };
};
