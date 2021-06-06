import { customAxios } from "../../customApi";
interface IProps {
  page: number;
  size: number;
  sort: string;
}

export const getProjectsAPI = async (data: IProps) => {
  try {
    const res: any = await customAxios.get(
      `/project?page=${data.page}&size=${data.size}&sort=${data.sort}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getProjectAPI = async (projectId: number) => {
  try {
    const res = await customAxios.get(`/project/${projectId}`);
    return res;
  } catch (error) {
    return error.response;
  }
};
