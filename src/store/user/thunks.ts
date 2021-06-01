import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { meAPI } from "../../lib/api/user";
import { tryLoginAsync } from "./actions";
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
