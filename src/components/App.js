import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [filteredTasks, setFilteredTasks] = React.useState(TASKS);

  const handleCategoryFilter = (category) => {
    if (category === "All") {
      setFilteredTasks(TASKS);
    } else {
      setFilteredTasks(TASKS.filter((task) => task.category === category));
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryFilter={handleCategoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={(task) => setFilteredTasks([...filteredTasks, task])} />
      <TaskList tasks={filteredTasks} onDeleteTask={(id) => setFilteredTasks(filteredTasks.filter((task) => task.id !== id))} />
    </div>
  );
}

export default App;