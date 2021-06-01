import { BannerType } from "../../types/banner";
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type IBannerState = {
  loading: boolean;
  error: boolean | null;
  data: BannerType[];
};

export type BannerActions = ActionType<typeof actions>;
