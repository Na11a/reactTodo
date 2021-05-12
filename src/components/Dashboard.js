import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';
import {useEffect} from 'react';
import { loadDashboard } from "../store/dashboard/actions";
import { useDispatch,useSelector } from "react-redux";
export default function Dashboard({selectedList}) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadDashboard())
    },[])
    
    const dash = useSelector(state=>state.lists) 


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
                dash.map((l) => 
                    <NavLink to={`/todo-list/${l.id}`} onClick={()=>selectedList(l)} key={l.id} activeClassName="active-link" className='link'>{l.title} </NavLink>
                )
            }
            </div>
        </div>        
        </ul>
    )
}
