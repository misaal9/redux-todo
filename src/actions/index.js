export const ADD_TODO = 'ADD_TODO';
export const TODO_LIST = 'TODO_LIST';
export const SET_FILTER = 'SET_FILTER';

// action creators
export const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text: text
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  };
};
