import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = 0;

export const increase = createAction("counter/INCREMENT");
export const decrease = createAction("counter/DECREMENT");

const counterReducer = createReducer(initialState, {
  [increase.type]: (state, action) => state + 1,
  [decrease.type]: (state, action) => state - 1,
});

export type CounterState = ReturnType<typeof counterReducer>;

export default counterReducer;
