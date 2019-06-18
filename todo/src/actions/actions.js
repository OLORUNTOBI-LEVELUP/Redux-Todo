export const ADD_TASK = "ADD_TASK"
export const TOGGLE_TASK = "TOGGLE_TASK"

export const addTask = text => {
  return { type: ADD_TASK, text }
}

export const toggleTask = id => {
  return { type: TOGGLE_TASK, id }
}