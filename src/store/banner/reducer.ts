import { createReducer } from "typesafe-actions";
import { BannerActions, IBannerState } from "./types";
import { GET_BANNER, GET_BANNER_SUCCESS, GET_BANNER_FAILURE } from "./actions";

export const initialState: IBannerState = {
  loading: false,
  error: null,
  data: [],
};

export default createReducer<IBannerState, BannerActions>(initialState, {
  [GET_BANNER]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [GET_BANNER_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
    },
  }),
  [GET_BANNER_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: true,
  }),
});
