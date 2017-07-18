import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import AddToDo from './containers/AddToDo';
import ToDoList from './containers/ToDoList';
import FilterLinks from './containers/FilterLinks';
import toDoApp from './reducers';

let store = createStore(toDoApp);

const App = () => {
  return(
    <div>
      <AddToDo />
      <ToDoList />
      <FilterLinks />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
