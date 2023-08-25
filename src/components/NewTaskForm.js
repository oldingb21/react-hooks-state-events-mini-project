import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState('');
  const [newTaskCategory, setNewItemCategory] = useState('Code');

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setNewItemCategory(e.target.value)
  }

  const newTaskObj = {
    text:text,
    category:newTaskCategory
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTaskObj)
  }

  const categoriesToDisplay = categories.map((category)=> {
    return category!== "All" ? <option key={category}>{category}</option> : null
  })

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={newTaskCategory} onChange={handleCategoryChange}>
          {categoriesToDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
