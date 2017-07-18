import { combineReducers } from 'redux';
import { ToDoReducer } from './reducer_todos';
import { ActiveFilterReducer } from './reducer_activeFilter';

const toDoApp = combineReducers({
  todos: ToDoReducer,
  activeFilter: ActiveFilterReducer
});

export default toDoApp;
