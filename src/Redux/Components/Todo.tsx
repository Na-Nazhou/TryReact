import React from 'react'
import { TodoItem } from "../Types/States/TodoState";

type TodoProps = TodoItem & {
  onClick: () => void
}

const Todo: React.FC<TodoProps> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo