import { AxiosError } from "axios";
import { createAsyncAction, createAction } from "typesafe-actions";
import { UserType } from "../../types/user";

export const TRY_LOGIN = "user/TRY_LOGIN" as const;
export const TRY_LOGIN_SUCCESS = "user/TRY_LOGIN_SUCCESS" as const;
export const TRY_LOGIN_FAILURE = "user/TRY_LOGIN_FAILURE" as const;

export const LOGOUT = "user/LOGOUT" as const;

export const GET_ME = "user/GET_ME" as const;
export const GET_ME_SUCCESS = "user/GET_ME_SUCCESS" as const;
export const GET_ME_FAILURE = "user/GET_ME_FAILURE" as const;

export const logout = createAction(LOGOUT)();

export const tryLoginAsync = createAsyncAction(
  TRY_LOGIN,
  TRY_LOGIN_SUCCESS,
  TRY_LOGIN_FAILURE
)<void, UserType, AxiosError<ResponseType>>();

export const tryGetMeAsync = createAsyncAction(
  GET_ME,
  GET_ME_SUCCESS,
  GET_ME_FAILURE
)<void, UserType, AxiosError<ResponseType>>();
