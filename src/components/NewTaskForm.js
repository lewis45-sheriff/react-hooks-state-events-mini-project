import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState(categories[1]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({
      text: details,
      category: category,
    });
    setDetails(""); // Reset the form after submission
    setCategory(categories[1]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {/* render <option> elements for each category here */}
          {categories.filter((category) => category !== "All").map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;