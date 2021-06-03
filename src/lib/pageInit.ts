import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import cookies from "next-cookies";
import { tryGetMeThunk } from "../store/user";
import { refreshTokenAPI } from "./api/user";
import { removeToken, setToken } from "./token";
import { getBannerPromise, getProjectsPromise } from "./promiseDispatch";

export const pageInit = async (context: any) => {
  const allCookies = cookies(context);
  const accessToken = allCookies["access_token"];

  if (accessToken !== undefined) {
    const accessExpired = allCookies["access_expired"];

    const now = moment();

    setToken(accessToken);
    axios.defaults.headers.common["Authorization"] = `${accessToken}`;

    if (now.diff(moment(accessExpired), "minutes") < 0) {
      //* 토큰이 만료됨.
      const refreshTokenByCookie = allCookies["refresh_token"];
      const refreshResponse: any =
        refreshTokenByCookie && (await refreshTokenAPI(refreshTokenByCookie));

      const { accessToken, refreshToken, accessExpiredTime } =
        refreshResponse.data.tokens;

      setToken(accessToken);
      Cookies.set("refresh_token", refreshToken);
      Cookies.set("access_expired", accessExpiredTime);

      axios.defaults.headers.common["Authorization"] = `${accessToken}`;
    }

    await context.store.dispatch(tryGetMeThunk());
    await Promise.all([getBannerPromise(context), getProjectsPromise(context)]);
  } else {
    removeToken();
  }
};
