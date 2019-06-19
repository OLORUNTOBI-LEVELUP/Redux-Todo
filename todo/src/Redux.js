import uuid from "uuid"

// ACTION NAMES
export const ADD_TASK = "ADD_TASK"
export const TOGGLE_TASK = "TOGGLE_TASK"
export const DELETE_TASK = "DELETE_TASK"

// ACTION CREATORS
export const addTask = text => {
  return {
    type: ADD_TASK,
    payload: {
      text: text,
      completed: false,
      id: uuid()
    }
  }
}

export const toggleTask = id => {
  return {
    type: TOGGLE_TASK,
    payload: id
  }
}

export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

// STATE
const initialSate = {
  tasks: [
    {
      text: "Learn Redux",
      completed: false,
      id: uuid()
    },
    {
      text: "Fold the laundry",
      completed: false,
      id: uuid()
    },
    {
      text: "Water Plants",
      completed: false,
      id: uuid()
    }
  ]
}

// REDUCER
const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_TASK: {
      console.log({ state, action })
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
      }
    }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      )
    default:
      return state
  }
}

export default reducer
