import React from 'react';
import ToDoItem from './ToDoItem';

const renderItems = (todos, {toggleTask}) => {
  if (!todos.length) {
    return <ToDoItem>No items so far</ToDoItem>;
  }
  return todos.map(todo => <ToDoItem key={todo.id} todo={todo} toggleTask={toggleTask} />);
};

const ToDoList = ({todos, toggleTask}) => {
  return (
    <ul className="to-do-list list-group">
      { renderItems(todos, toggleTask) }
    </ul>
  );
}

export default ToDoList;
