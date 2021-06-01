import { customAxios } from "../../customApi";

export interface IGetBanner {
  httpStatus: string;
  message: string;
  bannerLocation: [
    {
      id: number;
      fileLocation: string;
    }
  ];
}

export const getBannerAPI = async () => {
  try {
    const res = await customAxios.get(`/file/locations/banner`);
    return res;
  } catch (e) {
    return e.response;
  }
};
