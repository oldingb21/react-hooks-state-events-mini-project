import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

const [clickedCategory, setClickedCategory] = useState('All');
const [tasks, setTasks] = useState(TASKS);

const handleCategoryChange = (category) => {
  setClickedCategory(category)
}

const handleTasksDelete = (taskToDelete) => {
  const filteredTasks = tasks.filter((task)=>{
    return task.text !== taskToDelete.text
  })
  setTasks(filteredTasks)
}

const onTaskFormSubmit = (newTaskObj) => {
  setTasks([...tasks, newTaskObj])
}

const filteredTasks = tasks.filter((task)=> {
  return clickedCategory === "All" || clickedCategory === task.category
})

// const handleTaskCreate = (newTasks) => {
//   setTasks([])
// }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} clickedCategory={clickedCategory} handleCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onTasksDelete={handleTasksDelete}/>
    </div>
  );
}

export default App;
