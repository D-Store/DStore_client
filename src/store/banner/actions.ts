import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { BannerType } from "../../types/banner";

export const GET_BANNERS = "banner/GET_BANNER" as const;
export const GET_BANNERS_SUCCESS = "banner/GET_BANNER_SUCCESS" as const;
export const GET_BANNERS_FAILURE = "banner/GET_BANNER_FAILURE" as const;

export const getBannerAsync = createAsyncAction(
  GET_BANNERS,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_FAILURE
)<void, BannerType[], AxiosError<ResponseType>>();
