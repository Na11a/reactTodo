import { act } from "react-dom/test-utils";
import { ADD_TASK } from "./actions";
import { SHOW_TASKS, DELETE_TASK, UPDATE_TASK } from "./actions";

function taskReducer(state = [], action) {
  switch (action.type) {
    case SHOW_TASKS:
      return action.payload;
    case ADD_TASK:
      return state.concat(action.payload);
    case DELETE_TASK:
      return state.filter((t) => t.id !== action.payload);
    case UPDATE_TASK:
      return state.map(task => {return task.id!==action.payload.id?task:action.payload})
    default:
      return state;
  }
}
export default taskReducer;
