import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Actions/todoActions'

const AddTodo: React.FC<{}> = () => {
  const dispatch = useDispatch()

  let input: HTMLInputElement | null = null

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input) {
      return
    }

    if (!input.value.trim()) {
      return
    }

    dispatch(addTodo(input.value))
    input.value = ''
  }, [dispatch, input])

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

export default AddTodo