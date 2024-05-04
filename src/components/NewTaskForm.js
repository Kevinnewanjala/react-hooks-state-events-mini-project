import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("All");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h5>Add a new task</h5>
      <label htmlFor="text">Task text</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All</option>
        {CATEGORIES.filter((c) => c !== "All").map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;