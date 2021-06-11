import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { CommentType } from "../../types/comment";

export const GET_COMMENTS = "comment/GET_COMMENTS" as const;
export const GET_COMMENTS_SUUCESS = "comment/GET_COMMENTS_SUCCESS" as const;
export const GET_COMMENTS_FAILURE = "comment/GET_COMMENTS_FAILURE" as const;

export const createCommentAsync = createAsyncAction(
  GET_COMMENTS,
  GET_COMMENTS_SUUCESS,
  GET_COMMENTS_FAILURE
)<void, CommentType[], AxiosError<ResponseType>>();
