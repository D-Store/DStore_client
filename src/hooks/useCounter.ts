import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { useCallback } from 'react';
import { decrease, increase } from 'modules/counter/counterActions';
const useCounter = () => {
  const dispatch = useDispatch();

  const number = useSelector((state: RootState) => state.counter.number);
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return {
    number,
    onIncrease,
    onDecrease,
  };
};

export default useCounter;
