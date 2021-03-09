import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from 'modules/todo/todoActions';
import { RootState } from 'modules';
import { useCallback } from 'react';

function useTodo() {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todo);
  const onAddTodo = useCallback(
    (text: string) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  const onToggleTodo = useCallback(
    (id: number) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );
  const onRemoveTodo = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return { todos, onAddTodo, onToggleTodo, onRemoveTodo };
}

export default useTodo;
