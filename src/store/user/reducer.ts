import { createReducer } from "typesafe-actions";
import {
  TRY_LOGIN,
  TRY_LOGIN_SUCCESS,
  TRY_LOGIN_FAILURE,
  GET_ME,
  GET_ME_SUCCESS,
  GET_ME_FAILURE,
  LOGOUT,
} from "./actions";
import { IUserState, UserAction } from "./types";

export const initialState: IUserState = {
  loading: false,
  error: null,
  data: {
    login: false,
    id: 0,
    follow: false,
    name: "",
    profileImage: "",
  },
};

export default createReducer<IUserState, UserAction>(initialState, {
  [TRY_LOGIN]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [TRY_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      ...action.payload,
      login: true,
    },
  }),
  [TRY_LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: true,
  }),
  [GET_ME]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [GET_ME_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      login: true,
      ...action.payload,
    },
  }),
  [GET_ME_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: true,
  }),
  [LOGOUT]: (state, action) => {
    return (state = initialState);
  },
});
