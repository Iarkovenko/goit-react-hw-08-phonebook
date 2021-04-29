import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./auth-actions";

const initialUserState = {
  name: null,
  email: null,
};
const userReducers = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]:(_, { payload }) => payload.user,
});

const tokenReducers = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
});

const errorReducer = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user: userReducers,
  token: tokenReducers,
  error: errorReducer,
});

export default authReducer;
