import { ADD_TASK } from "../dashboard/actions";

export const SHOW_TASKS = "SHOW_TASKS";

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
  }).then((response) =>response)
  .then(() =>
    dispatch({
      type: ADD_TASK,
      payload: task,
    })
  );
};
