import React from 'react';
import useCoutner from 'hooks/useCounter';

const Hello = () => {
  const { number, onIncrease, onDecrease } = useCoutner();
  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
};

export default Hello;
