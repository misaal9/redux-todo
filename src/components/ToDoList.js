import React from 'react';
import ToDoItem from './ToDoItem';

const renderItems = (todos) => {
  if (!todos.length) {
    return <li>No items so far</li>;
  }
  return todos.map(todo => <ToDoItem key={todo.text} text={todo.text}/>);
};

const ToDoList = ({todos}) => {
  return (
    <ul>
      { renderItems(todos) }
    </ul>
  );
}

export default ToDoList;
