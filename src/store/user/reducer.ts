import { createReducer } from "typesafe-actions";
import { TRY_LOGIN, TRY_LOGIN_SUCCESS, TRY_LOGIN_FAILURE } from "./actions";
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
      login: true,
    },
  }),
  [TRY_LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: true,
    data: {
      ...state.data,
    },
  }),
});
