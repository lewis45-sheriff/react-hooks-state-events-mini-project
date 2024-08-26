import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Handle form submission to add a new task
  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Filter tasks based on the selected category
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  // Function to handle deleting a task
  const handleDelete = (index) => {
    const remainingTasks = tasks.filter((task, i) => i !== index);
    setTasks(remainingTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;