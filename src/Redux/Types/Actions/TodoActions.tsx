enum TodoAction {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO"
}

export const ADD_TODO = TodoAction.ADD_TODO
export type AddTodoAction = {
  type: typeof ADD_TODO,
  id: number,
  text: string
}

export const TOGGLE_TODO = TodoAction.TOGGLE_TODO
export type ToggleTodoAction = {
  type: typeof TOGGLE_TODO
  id: number
}

export const DELETE_TODO = TodoAction.DELETE_TODO
export type DeleteTodoAction = {
  type: typeof DELETE_TODO
  id: number
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | DeleteTodoAction

