import { createReducer } from "typesafe-actions";
import { GET_COMMENTS } from "./actions";
import { CommentActions, ICommentState } from "./types";

export const initialState: ICommentState = {
  loading: false,
  error: null,
  data: [],
};
