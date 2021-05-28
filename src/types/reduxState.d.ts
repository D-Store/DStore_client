import { UserType } from "./user";

export type UserState = UserType & {
  isLoggedIn: boolean;
};
