import { HandleThunkActionCreator } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
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
      //* 여기에 Login 로직을 추가해주세요
      dispatch(success());
    } catch (e) {
      dispatch(failure(e));
    }
  };
};
