import React from 'react'
import Todo from './Todo'
import { TodoState } from '../Types/States/TodoState'

export type StateProps = {
  todos: TodoState
}

export type DispatchProps = {
  onTodoClick: (id: number) => void
}

type TodoListProps = StateProps & DispatchProps

const TodoList: React.FC<TodoListProps> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

export default TodoList