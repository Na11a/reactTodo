import React from 'react'
import {useRef, useState} from 'react';
import './styles/sidebar.css'
export default function TodoListSidebar({lists,onSelect,selectedList}) {
    const [list,setSelectedList] = useState(selectedList)
    const setActive = (l) => {if (l == list) 
    return 'selected-list'}

    return (
        lists.map(l => <button  onClick={()=>{onSelect(l); setSelectedList(l)}} className={setActive(l)} key={l.id}>{l.title}</button>)
    )
}
