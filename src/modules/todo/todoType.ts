import { addTodo, removeTodo, toggleTodo } from './todoActions';

export type Todo = {
  text: string;
  id: number;
  done: boolean;
};

export type Todos = Todo[];

export type ActionsTodo =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;
