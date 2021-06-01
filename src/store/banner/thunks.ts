import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { BannerActions } from "./types";
import { getBannerAsync } from "./actions";
import { getBannerAPI } from "../../lib/api/banner";

export const getBannerThunk = (): ThunkAction<
  void,
  RootState,
  void,
  BannerActions
> => {
  return async (dispatch) => {
    const { request, success, failure } = getBannerAsync;

    const res = await getBannerAPI();
    console.log(res.data.bannerLocation);

    dispatch(request());

    try {
      dispatch(success(res.data.bannerLocation));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};
