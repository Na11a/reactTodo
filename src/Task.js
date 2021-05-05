import React from 'react'
import './styles/Task.css';

export default function Task({task,getRemoveTask}) {
    const deadline = task.dueDate === null ? '' :task.dueDate.toLocaleString().slice(0,10)
    return (
        <div className ="task-block">
            <h1 className="title">{task.title}</h1>
            <div className="description">{task.desc}</div>
            <input type="checkbox"/>
            <div>{deadline}</div>
            <button onClick={() => getRemoveTask(task)}>Delete</button>
        </div>
    )
}
