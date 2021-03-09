import { combineReducers } from 'redux';
import counter from './counter/counterReducer';
import todo from './todo/todoReducer';

const rootReducer = combineReducers({
  counter,
  todo,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
