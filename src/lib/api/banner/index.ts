import { customAxios } from "../";

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
  const res = await customAxios(`/file/benner/locations`);

  return res;
};
