const url = "http://localhost:5000/api/";

export function deleteTask(task) {
  return fetch(url + `tasktodo/${task.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function patchTask(task) {
  return fetch(url + `tasktodo/${task.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(task),
  }).then((response) => response.json());
}

export function createTask (task,list) {
    task = { ...task, taskListId: list.id };
    return fetch(url + `tasktodo/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(task),
    })
      .then((response) => response.json())
    }