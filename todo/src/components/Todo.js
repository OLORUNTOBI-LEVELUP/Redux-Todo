import React from "react"

const Todo = props => {
  console.log(props)
  return <p>{props.text}</p>
}

export default Todo