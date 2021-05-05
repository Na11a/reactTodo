import React, { useState } from "react";
import "./App.css";
import NewTaskForm from "./NewTaskForm";
import Tasks from "./Tasks";
import {useEffect} from 'react'
import TodoListSidebar from "./TodoListSidebar";
const url = 'http://localhost:5000/api/'
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskLists, setTaskLists] = useState([]);
  const [list,setList] = useState({id:1});

  const removeTask = (t) =>{
      setTasks(tasks.filter(task=>t.id !==task.id))}

  const addTask = (task) => {
    let index = 1
    if (tasks.length !==0){ 
      index = tasks[tasks.length -1].id + 1
      }
  setTasks([...tasks, {...task,taskListId:list.id,id:index}])
  };

  useEffect(() =>{
    fetch(url+`tasklist/`).then(response=>response.json())
              .then(function(lists) {
                setTaskLists(lists)
                setList(lists[0])
              })
              
  }
  ,[])
  useEffect(() => {
    fetch(url+`tasklist/${list.id}/tasks`).
    then(response =>response.json()).
    then(ts=>setTasks(ts))
  }, [list])
  

  return (
    <div id="tasks">
      <div className="todoListSidebar">
        <TodoListSidebar lists={taskLists} selectedList={list} onSelect={setList} />
      </div>
      <div className="tasks-info">
        <Tasks tasks={tasks} getTask={removeTask}/>
        <NewTaskForm onSubmit={addTask} />
      </div>
    </div>
  );
}

export default App;
