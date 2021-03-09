export const ADD_TODO = 'todo/ADD_TODO' as const;
export const REMOVE_TODO = 'todo/REMOVE_TODO' as const;
export const TOGGLE_TODO = 'todo/TOGGLE_TODO' as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});
