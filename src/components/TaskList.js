import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          onDelete={onDeleteTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;
