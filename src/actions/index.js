export const ADD_TODO = 'ADD_TODO';
export const TODO_LIST = 'TODO_LIST';
export const SET_FILTER = 'SET_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const FILTER = {
  SHOW_ALL: 'Show All',
  SHOW_C: 'Show Completed',
  SHOW_IC: 'Show Incomplete'
};

// action creators
export const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text: text
  };
};

export const toggleTask = (todo) => {
  return {
    type: TOGGLE_TODO,
    task: todo
  }
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  };
};
