import React from "react";
import Task from "./Task";
import "./styles/Tasks.css";
import { useState, useEffect } from "react";
import NewTaskForm from "./NewTaskForm";
import { useParams } from "react-router";

import { deleteTask, patchTask, createTask } from "./task-service/api-service";
const url = "http://localhost:5000/api/";

export default function Tasks(props) {
  let lists = props.lists;
  let { id } = useParams();
  let [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(url + `tasklist/${id}/tasks`)
      .then((response) => response.json())
      .then(ts=>setTasks(ts))
  }, [id]);

  const removeTask = (t) => {
    deleteTask(t).then(setTasks(tasks.filter((task) => t.id !== task.id)));
  };

  const updateDone = (t) => {
    patchTask(t).then(() => setTasks([...tasks]));
  };

  const addTask = (task) => {
    createTask(task, props.list).then((task) => setTasks([...tasks, task]));
  };
  return (
    <div id="task-list">
      {tasks.map((t, i) => (
        <Task
          key={i}
          task={t}
          getRemoveTask={removeTask}
          updateDone={updateDone}
          lists={lists}
        />
      ))}
      <NewTaskForm onSubmit={addTask} />
    </div>
  );
}
