import React, { Component } from "react"

import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { addTask } from "../Redux"

class TodoForm extends Component {
  textRef = React.createRef()

  handleNewTask = e => {
    e.preventDefault()
    const textValue = this.textRef.current.value
    this.props.addTask(textValue)
    this.textRef.current.value = ""
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" ref={this.textRef} />
          <button onClick={e => this.handleNewTask(e)}>Add</button>
        </form>
      </div>
    )
  }
}

const mapStateToProp = state => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTask
    },
    dispatch
  )
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(TodoForm)