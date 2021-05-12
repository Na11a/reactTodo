import { createStore,applyMiddleware } from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

import taskListReduser from './dashboard/reducer'
import taskReducer from './tasks/reducer'

export const rootReducer = combineReducers({
    lists: taskListReduser,
    tasks:taskReducer
})
const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)
const store = createStore(rootReducer,composedEnhancer ) 

export default store