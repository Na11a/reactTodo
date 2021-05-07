import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import Task from './Task';
import  { deleteTask,patchTask,createTask } from './task-service/api-service';


export default function NotDone(props) {
    let [tasks,setTasks] = useState([]);
    useEffect(()=>fetch('http://localhost:5000/api/tasktodo')
    .then(response=>response.json())
    .then(ts => setTasks(ts.filter((t=>(t.done ===false)&&(t.dueDate)))
    .filter(t=>new Date(t.dueDate)<=new Date())))
    ,[]);
    const removeTask = (t) => {
        deleteTask(t).then(setTasks(tasks.filter((task) => t.id !== task.id)));
      };
    
      const updateDone = (t) => {
        patchTask(t).then((ts) => setTasks(tasks.filter(task=>task !== t)));
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
            </div>
    )
}
