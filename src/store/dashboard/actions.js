export const SHOW_TASKLIST = 'SHOW_TASKLIST'
export const ADD_TASK = 'ADD_TASK'
export const loadDashboard =() =>dispatch => {
    fetch('http://localhost:5000/api/tasklist')
        .then(res => res.json())
        .then(lists => dispatch({
            type: SHOW_TASKLIST,
            payload: lists
        }))
}
