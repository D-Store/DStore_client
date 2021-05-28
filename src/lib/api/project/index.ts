import { customAxios } from "../";

interface IProps {
  page: number;
  size: number;
  sort: string;
}

export const getProjects = async (data: IProps) => {
  try {
    const res: any = await customAxios.get(
      `/project?page=${data.page}&size=${data.size}&sort=${data.sort}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
