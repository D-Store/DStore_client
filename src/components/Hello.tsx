import React, { useCallback } from 'react';
import useCoutner from 'hooks/useCounter';
import useTodo from 'hooks/useTodo';
import useInput from 'hooks/useInput';
const todoItemStyle = {
  textDecoration: 'line-through',
};
const Hello = () => {
  const input = useInput();
  const { number, onIncrease, onDecrease } = useCoutner();
  const { todos, onAddTodo, onRemoveTodo, onToggleTodo } = useTodo();

  const onSubmit = useCallback(
    (text: string) => {
      console.log(text);
      onAddTodo(text);
    },
    [onAddTodo]
  );

  const onDelete = useCallback(
    (id: number) => {
      console.log(id);
      onRemoveTodo(id);
    },
    [onRemoveTodo]
  );

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <hr />
      <input type="text" {...input} />
      <button onClick={() => onSubmit(input.value)}>제출</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div style={todo.done ? todoItemStyle : {}} onClick={() => onToggleTodo(todo.id)}>
              {todo.text}
            </div>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Hello;
