import React from "react";
import Task from "./Task";
import { useState, useEffect } from "react";
import "../styles/Tasks.css";
import NewTaskForm from "../NewTaskForm";
import '../task-service/api-service';
const url = "http://localhost:5000/api/";

export default function TodayTasks(props) {
  let [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(url + "tasktodo/colections/today")
      .then((response) => response.json())
      .then(setTasks);
  }, []);

  const removeTask = (t) => {
    fetch(url + `tasktodo/${t.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(t),
    }).then(setTasks(tasks.filter((task) => t.id !== task.id)));
  };

  const updateDone = (t) => {
    fetch(url + `tasktodo/${t.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(t),
    })
      .then((response) => response.json())
      .then(() => setTasks([...tasks]));
  };

  const addTask = (task) => {
    fetch(url + `tasktodo/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ ...task }),
    })
      .then((response) => response.json())
      .then((task) => setTasks([...tasks, task]));
  };
  return (
    <div id="task-list">
      {tasks.map((t, i) => (
        <Task
          key={i}
          task={t}
          getRemoveTask={removeTask}
          updateDone={updateDone}
          lists={props.lists}
          showListTitle={true}
        />
      ))}
      <NewTaskForm onSubmit={addTask} />
    </div>
  );
}
