import { increase, decrease } from './counterActions';

export type ActionsType = ReturnType<typeof increase> | ReturnType<typeof decrease>;

export type counterReducerType = {
  number: number;
};
