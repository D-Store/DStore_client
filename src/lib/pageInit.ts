import axios from "axios";
import cookies from "next-cookies";
import { removeToken, setToken } from "./token";

export const pageInit = (ctx: any) => {
  const allCookies = cookies(ctx);
  const accessToken = allCookies["access_token"];
  if (accessToken !== undefined) {
    setToken(accessToken);
    axios.defaults.headers.common["Authorization"] = `${accessToken}`;
  } else {
    removeToken();
  }
};
