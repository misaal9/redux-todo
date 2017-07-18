import deepFreeze from 'deep-freeze';
import expect from 'expect';
import { ADD_TODO } from '../actions';

export const ToDoReducer = (state=[], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false
      }];
    default:
      return state;
  }
};

/**test todos **/
const testTodos = () => {
  const beforeState = [];
  const action = {
    type: ADD_TODO,
    text: 'Learn redux today'
  };
  const afterState = [{
    text: action.text,
    completed: false
  }];

  deepFreeze(beforeState);

  expect(ToDoReducer(beforeState, action)).toEqual(afterState);
  console.log('ToDoReducer tests pass');
}
testTodos();
/**test todos. till here **/
