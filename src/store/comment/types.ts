import { ActionType } from "typesafe-actions";
import { CommentType } from "../../types/comment";
import * as actions from "./actions";

export type ICommentState = {
  loading: boolean;
  error: boolean | null;
  data: CommentType[];
};

export type CommentActions = ActionType<typeof actions>;
