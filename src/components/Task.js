import React from 'react';

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <div className="task-text">
        {task.text} - {task.category}
      </div>
      <button onClick={() => onDelete(task)}>Delete</button>
    </div>
  );
}

export default Task;
