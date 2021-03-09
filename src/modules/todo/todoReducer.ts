import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './todoActions';
import { ActionsTodo, Todo, Todos } from './todoType';

const initialState: Todos = [
  { id: 1, text: '타입스크립트 배우기', done: true },
  { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
  { id: 3, text: '투두리스트 만들기', done: false },
];

function todoReducer(state: Todos = initialState, action: ActionsTodo) {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false,
      });
    case REMOVE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo: Todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export default todoReducer;
