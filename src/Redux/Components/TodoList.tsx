import React, { useCallback } from 'react'
import Todo from './Todo'
import { TodoState } from '../Types/States/TodoState'
import { useSelector, useDispatch } from 'react-redux'
import { getVisibleTodos } from '../Selectors/todosSelectors'
import { toggleTodo, deleteTodo } from '../Actions/todoActions'

const TodoList: React.FC<{}> = () => {

  const todos: TodoState = useSelector(getVisibleTodos)

  const dispatch = useDispatch()

  const handleClick = useCallback((id) => dispatch(toggleTodo(id)), [dispatch])
  const handleDelete = useCallback((id) => dispatch(deleteTodo(id)), [dispatch])

  return (<ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => handleClick(todo.id)} onDelete={() => handleDelete(todo.id)} />
    ))}
  </ul>);

}

export default TodoList