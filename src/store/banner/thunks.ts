import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { BannerActions } from "./types";
import { getBannerAsync } from "./actions";
import { getBannerAPI } from "../../lib/api/banner";

export const getBannersThunk = (): ThunkAction<
  void,
  RootState,
  void,
  BannerActions
> => {
  return async (dispatch) => {
    const { request, success, failure } = getBannerAsync;

    try {
      const res = await getBannerAPI();

      dispatch(request());
      dispatch(success(res.data.bannerLocation));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};
