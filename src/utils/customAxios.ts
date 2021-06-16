import axios from "axios";
import { toast } from "react-toastify";

export const customAxios = axios.create({
  baseURL: "http://10.80.162.184:8080",
  withCredentials: true,
});

const accessToken = sessionStorage.getItem("access_token") || "";

if (accessToken) {
  customAxios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
}

// customAxios.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   function (error) {
//     console.log("에러발생");
//     // 요청 에러 직전 호출됩니다.
//     return Promise.reject(error);
//   }
// );

// customAxios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
