import React from 'react';

const ToDoItem = ({todo, toggleTask}) => {
  return <li className={todo.completed ? 'strikethrough' : ''} onClick={() => toggleTask(todo)}>{todo.text}</li>;
}

export default ToDoItem;
