import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button onClick={() => handleCategoryClick("All")} className={selectedCategory === "All" ? "selected" : ""}>
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;