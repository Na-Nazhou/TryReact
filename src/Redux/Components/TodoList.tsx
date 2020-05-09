import React, { useCallback } from 'react'
import Todo from './Todo'
import { TodoState } from '../Types/States/TodoState'
import { useSelector, useDispatch } from 'react-redux'
import { getVisibleTodos } from '../Selectors/todosSelectors'
import { toggleTodo } from '../Actions/actionCreators'

const TodoList: React.FC<{}> = () => {

  const todos: TodoState = useSelector(getVisibleTodos)

  const dispatch = useDispatch()

  const onTodoClick = useCallback((id) => dispatch(toggleTodo(id)), [dispatch])

  return (<ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>);

}

export default TodoList