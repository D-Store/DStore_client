import { ProjectType } from "../../types/project";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type IProjectState = {
  loading: boolean;
  error: boolean | null;
  data: ProjectType[];
};

export type ProjectActions = ActionType<typeof actions>;
