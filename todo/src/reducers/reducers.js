import { ADD_TASK, TOGGLE_TASK } from "../actions/actions"

// const initialSate = {
//   todos: []
// }

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ]
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      )
    default:
      return state
  }
}

export default todoReducer