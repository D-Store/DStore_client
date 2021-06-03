import { AxiosResponse } from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { meAPI, refreshTokenAPI } from "../../lib/api/user";
import { tryLoginAsync, tryGetMeAsync } from "./actions";
import { UserAction } from "./types";

export const tryLoginThunk = (): ThunkAction<
  void,
  RootState,
  void,
  UserAction
> => {
  return async (dispatch) => {
    const { request, success, failure } = tryLoginAsync;
    dispatch(request());

    try {
      const me = await meAPI();
      dispatch(success(me.data.user));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};

export const tryGetMeThunk = (): ThunkAction<
  void,
  RootState,
  void,
  UserAction
> => {
  return async (dispatch) => {
    const { request, success, failure } = tryGetMeAsync;
    dispatch(request());

    const me = await meAPI();

    if (me.status === 200) {
      dispatch(success(me.data.user));
    }
    if (me.status === 410) {
      //* 토큰이 만료되었을때

      dispatch(failure());
    } else {
      dispatch(failure());
    }
  };
};
