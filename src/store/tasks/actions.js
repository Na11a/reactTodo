export const SHOW_TASKS = "SHOW_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const loadTasks = (id) => (dispatch) => {
  fetch(`http://localhost:5000/api/tasklist/${id}/tasks`)
    .then((res) => res.json())
    .then((tasks) =>
      dispatch({
        type: SHOW_TASKS,
        payload: tasks,
      })
    );
};
export const createTask = (task) => (dispatch) => {
  fetch(`http://localhost:5000/api/tasktodo/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ ...task }),
  })
    .then((response) => response.json())
    .then((task) =>
      dispatch({
        type: ADD_TASK,
        payload: task,
      })
    );
};
export const deleteTask = (task) => (dispatch) =>
  fetch(`http://localhost:5000/api/tasktodo/${task.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((id) =>
      dispatch({
        type: DELETE_TASK,
        payload: id,
      })
    );
export const updateTask = (task) => (dispatch) =>
  fetch(`http://localhost:5000/api/tasktodo/${task.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(task),
  }).then(response=>response.json())
    .then((task)=>dispatch({
      type:UPDATE_TASK,
      payload:task
    }));
