import React from "react";

function CategoryFilter({categories, clickedCategory, handleCategoryChange}) {

  const handleClick = (e) => {
    const button = e.target
    handleCategoryChange(button.textContent)
  }

  const categoriesToDisplay = categories.map((category)=>{
    return (
      <button key={category} 
      onClick={handleClick}
      className={clickedCategory === category ? "selected" : ""}
      >{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesToDisplay}
    </div>
  );
}

export default CategoryFilter;
