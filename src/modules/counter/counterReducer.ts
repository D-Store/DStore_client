import { INCREASE, DECREASE } from './counterActions';
import { ActionsType, counterReducerType } from './counterTypes';

const initialState = {
  number: 0,
};

function counterReducer(state: counterReducerType = initialState, action: ActionsType) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
