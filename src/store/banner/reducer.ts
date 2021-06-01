import { createReducer } from "typesafe-actions";
import { BannerActions, IBannerState } from "./types";
import {
  GET_BANNERS,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_FAILURE,
} from "./actions";
import { AnyAction } from "redux";

export const initialState: IBannerState = {
  loading: false,
  error: null,
  data: [],
};

export default createReducer<IBannerState, BannerActions>(initialState, {
  [GET_BANNERS]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [GET_BANNERS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: [...action.payload],
  }),
  [GET_BANNERS_FAILURE]: (state, action) => ({
    ...state,
    loading: false,
    error: true,
  }),
});
