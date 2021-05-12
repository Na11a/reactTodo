import { SHOW_TASKLIST } from './actions'

function taskListReduser(state = [],action){
    switch(action.type){
        case SHOW_TASKLIST:
            return action.payload
        default:
            return state
    }
}
export default taskListReduser