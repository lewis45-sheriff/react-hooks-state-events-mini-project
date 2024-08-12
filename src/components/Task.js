import React from 'react';

function Task({ task, onDelete }) {
  return (
    <li className="task">
      <span>{task.text}</span>
      <span className="category">{task.category}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default Task;