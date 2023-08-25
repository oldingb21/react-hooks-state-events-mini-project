import React from "react";
import Task from "./Task";

function TaskList({tasks, onTasksDelete}) {

  const tasksToDisplay = tasks.map((task)=>{
    return <Task key={task.text} text={task.text} category={task.category} onTasksDelete={onTasksDelete}/>
  })

        
  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
