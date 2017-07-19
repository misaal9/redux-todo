import React from 'react';

const listGroupName = 'list-group-item'

const ToDoItem = ({todo, toggleTask}) => {
  if (!todo) {
    return <li className="list-group-item not-added">No items to show</li>;
  }
  let className = `${listGroupName} ${todo.completed? 'strikethrough' : ''}`;
  return <li className={className} onClick={() => toggleTask(todo)}>{todo.text}</li>;
}

export default ToDoItem;
