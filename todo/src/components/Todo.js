    
import React from "react"

const Todo = props => {
  return (
    <div>
      <div onClick={() => props.toggleTask(props.task.id)}>
        {props.task.text}
      </div>
      <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
    </div>
  )
}

export default Todo