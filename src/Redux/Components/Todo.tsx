import React from 'react'
import { TodoItem } from "../Types/States/TodoState";

type TodoProps = TodoItem & {
  onClick: () => void,
  onDelete: () => void
}

const Todo: React.FC<TodoProps> = ({ onClick, onDelete, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <span className="close" onClick={onDelete}>x</span>
  </li>
)

export default Todo