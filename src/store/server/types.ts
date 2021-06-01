import { setServerRendered } from "./action";

export type ServerActions = ReturnType<typeof setServerRendered>;

export type IServerState = {
  isServerRendered: boolean;
};
