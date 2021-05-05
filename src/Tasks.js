import React from 'react'
import Task from './Task'
import './styles/Tasks.css'
export default function Tasks({tasks,getTask}) {
    return (
        <div id="task-list">
            {tasks.map((t,i) => <Task key={i} task ={t} getRemoveTask={getTask}/>)}  
        </div>
    )
}
