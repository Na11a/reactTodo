import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles/sidebar.css';
export default function Dashboard({lists,selectedList}) {
    return (
        <ul>
            <div id='list-sidebar'>
            <h2>Lists</h2>
            <ul>
            <li><NavLink to={`/today`} activeClassName="active-link" className='link'>today</NavLink></li>
            <li><NavLink to={`/not-done`} activeClassName="active-link" className='link'>Not Finished Tasks</NavLink></li>
            </ul>
            <div>
            { 
                lists.map((l) => 
                    <NavLink to={`/todo-list/${l.id}`} onClick={()=>selectedList(l)} key={l.id} activeClassName="active-link" className='link'>{l.title} </NavLink>
                )
            }
            </div>
        </div>        
        </ul>
    )
}
