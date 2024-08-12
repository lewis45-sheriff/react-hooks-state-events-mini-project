import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS, CATEGORIES } from '../data';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState('All');

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const filteredTasks = filteredCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === filteredCategory);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(cat => cat !== 'All')}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;