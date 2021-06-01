import axios from "axios";
import cookies from "next-cookies";
import { tryGetMeThunk } from "../store/user";
import { removeToken, setToken } from "./token";

export const pageInit = (context: any) => {
  const allCookies = cookies(context);
  const accessToken = allCookies["access_token"];
  if (accessToken !== undefined) {
    setToken(accessToken);
    axios.defaults.headers.common["Authorization"] = `${accessToken}`;

    context.store.dispatch(tryGetMeThunk());
  } else {
    removeToken();
  }
};
