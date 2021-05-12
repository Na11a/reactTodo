import { ADD_TASK } from '../dashboard/actions'
import {SHOW_TASKS} from './actions'

function taskReducer(state=[],action){
    switch(action.type){
        case SHOW_TASKS:
            return action.payload
        case ADD_TASK:
            return [...state,action.payload] 
        default:
            return state
    }
}
export default taskReducer