import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import { Route } from "react-router";
import TodayTasks from "./components/TodayTasks";
import { BrowserRouter } from "react-router-dom";
import NotDone from "./components/NotDone";
import { loadDashboard } from "./store/dashboard/actions";
import { useDispatch,useSelector } from "react-redux";
import {loadTasks} from './store/tasks/actions'

const url = "http://localhost:5000/api/";
function App() {
  const [taskLists, setTaskLists] = useState([]);
  const [list, setSelectedList] = useState();

  useEffect(() => {
    fetch(url + `tasklist/`)
      .then((response) => response.json())
      .then(function (lists) {
        setTaskLists(lists);
        setSelectedList(lists[0]);
      });
  }, []);
  



  return (
    <div id="tasks">

      <BrowserRouter>
        <div className="todoListSidebar">
          <Dashboard lists={taskLists} selectedList={setSelectedList} />
        </div>

        <Route path={"/todo-list/:id"}>
          <Tasks list={list} lists={taskLists} />
        </Route>
        <Route path="/today">
          <TodayTasks lists={taskLists} />
        </Route>
        <Route path="/not-done">
          <NotDone list={list} lists={taskLists} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
