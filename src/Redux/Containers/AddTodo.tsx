import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions/actionCreators'
import { AddTodoAction } from '../Types/Actions/TodoActions'

type AddTodoProps = {
  dispatch: (action: AddTodoAction) => void
}

const AddTodo: React.FC<AddTodoProps> = ({ dispatch }) => {
  let input: HTMLInputElement

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    console.log(input)
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={node => {
          input = node as HTMLInputElement
        }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)