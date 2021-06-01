import { AnyAction, Store } from "redux";
import chalk from "chalk";
import treeify from "treeify";

const reduxLogger = (store: Store) => (next: any) => (action: AnyAction) => {
  const isServer = typeof window === "undefined";

  isServer
    ? console.log(
        chalk.bgBlue.black("Action Handled"),
        chalk.bgGreen.black(`${action.type}`)
      )
    : console.log(
        `%c 액션 발생 : ${action.type}`,
        "background: #222; color: #bada55"
      );

  console.log(treeify.asTree(action, true, false));
  next(action);
};
export default reduxLogger;
