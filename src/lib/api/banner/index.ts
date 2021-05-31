import axios from "axios";

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
  const res = await axios.get(`/file/locations/banner`);

  return res;
};
