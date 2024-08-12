import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDeleteTask} />
      ))}
    </ul>
  );
}

export default TaskList;