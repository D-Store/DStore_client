import { ThunkAction } from "redux-thunk";
import { IProjectState, ProjectActions } from "./types";
import { getProjectsAsync } from "./actions";
import { RootState } from "..";
import { getProjectsAPI } from "../../lib/api/project";

export const getProjectsThunk = (): ThunkAction<
  void,
  RootState,
  void,
  ProjectActions
> => {
  return async (dispatch) => {
    const { request, success, failure } = getProjectsAsync;

    dispatch(request());
    try {
      const data = {
        page: 1,
        size: 4,
        sort: "id,desc",
      };
      const res = await getProjectsAPI(data);

      dispatch(success(res.data.projectList));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};
