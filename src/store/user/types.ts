import { UserType } from "../../types/user";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type IUserState = {
  loading: boolean | null;
  error: boolean | null;
  data: {
    login: boolean;
    id: number;
    name: string;
    profileImage: string;
    follow: boolean;
  };
};

export type UserAction = ActionType<typeof actions>;
