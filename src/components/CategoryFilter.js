import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;