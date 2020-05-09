import {
  ADD_TODO,
  TOGGLE_TODO,
  AddTodoAction,
  ToggleTodoAction,
  DeleteTodoAction,
  DELETE_TODO
} from "../Types/Actions/TodoActions";


let nextTodoId = 0
export const addTodo = (text: string): AddTodoAction => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id: number): ToggleTodoAction => {
  return { type: TOGGLE_TODO, id }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return { type: DELETE_TODO, id }
}

