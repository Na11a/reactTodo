import React from "react";
import {  NavLink } from "react-router-dom";
import "../styles/Task.css";

export default function Task({ task, getRemoveTask, updateDone,lists,...others }) {
  const deadline =
    task.dueDate === null ? "" : task.dueDate.toLocaleString().slice(0, 10);
  const doneChange = () => {
    task.done = task.done ? false : true;
    updateDone(task);
  };
  return (
    <div className="task-block">
      <h1 className="title">{task.title}</h1>
      <div className="description">{task.desc}</div>
      <input type="checkbox" checked={task.done} onChange={doneChange} />
      <div>{deadline}</div>
      <button onClick={() => getRemoveTask(task)}>Delete</button>
        
        {(others.showListTitle && task.taskListId) &&(<p><NavLink to={`todo-list/${task.taskListId}`}> {lists[task.taskListId-1].title}</NavLink></p>)}
    </div>
  );
}
