import React from 'react';
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

  const onSubmit = (text: string) => {
    onAddTodo(text);
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <hr />
      <input type="text" {...input} />
      <button onSubmit={() => onSubmit(input.value)}>제출</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={todo.done ? todoItemStyle : {}}
            onClick={() => onToggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Hello;
