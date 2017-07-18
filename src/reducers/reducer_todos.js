import deepFreeze from 'deep-freeze';
import expect from 'expect';
import { ADD_TODO, TOGGLE_TODO } from '../actions';

let count = 0;

export const ToDoReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false,
        id: count++
      }];
    case TOGGLE_TODO:
      return state.map((todoItem, index) => {
        if (todoItem.id !== action.task.id) {
          return todoItem;
        }
        let currentStatus = action.task.completed;
        return {
          ...todoItem,
          completed: !currentStatus
        }
      });
    default:
      return state;
  }
};

/** test todos **/
const testTodos = () => {
  const beforeState = [];
  const action = {
    type: ADD_TODO,
    text: 'Learn redux today'
  };
  const afterState = [{
    text: action.text,
    completed: false,
    id: 0
  }];

  deepFreeze(beforeState);

  expect(ToDoReducer(beforeState, action)).toEqual(afterState);
  console.log('ToDoReducer tests pass');
}
testTodos();
/**test todos. till here **/
