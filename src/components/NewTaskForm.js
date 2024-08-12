import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState('');
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onTaskFormSubmit({ text: taskText, category: taskCategory });
      setTaskText('');
      setTaskCategory(categories[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
      />
      <select
        value={taskCategory}
        onChange={(e) => setTaskCategory(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;