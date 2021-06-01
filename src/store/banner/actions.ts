import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";

export const GET_BANNER = "banner/GET_BANNER" as const;
export const GET_BANNER_SUCCESS = "banner/GET_BANNER_SUCCESS" as const;
export const GET_BANNER_FAILURE = "banner/GET_BANNER_FAILURE" as const;

export const getBannerAsync = createAsyncAction(
  GET_BANNER,
  GET_BANNER_SUCCESS,
  GET_BANNER_FAILURE
)<void, void, AxiosError<ResponseType>>();
