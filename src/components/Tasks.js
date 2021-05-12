import React from "react";
import Task from "./Task";
import "../styles/Tasks.css";
import { useState, useEffect } from "react";
import NewTaskForm from "../NewTaskForm";
import { useParams } from "react-router";
import {loadTasks,createTask} from '../store/tasks/actions'
import { useDispatch,useSelector } from "react-redux";

import { deleteTask, patchTask,  } from "../task-service/api-service";
const url = "http://localhost:5000/api/";

export default function Tasks(props) {
  let lists = props.lists;
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasks(id))
  }, [id]);

  const tasks = useSelector(state=>state.tasks)
  console.log(tasks)

  // const removeTask = (t) => {
  //   deleteTask(t).then(setTasks(tasks.filter((task) => t.id !== task.id)));
  // };

  // const updateDone = (t) => {
  //   patchTask(t).then(() => setTasks([...tasks]));
  // };

  const addTask = (task) =>{
    task.taskListId=id    
    dispatch(createTask(task))
  }
  return (
    <div id="task-list">
      {tasks.map((t, i) => (
        <Task
          key={i}
          task={t}
          lists={lists}
        />
      ))}
      <NewTaskForm onSubmit={addTask}/>
    </div>
  );
}
