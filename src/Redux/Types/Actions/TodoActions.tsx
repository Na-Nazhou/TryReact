enum TodoAction {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO"
}

export const ADD_TODO = TodoAction.ADD_TODO
export type AddTodoAction = {
  type: TodoAction.ADD_TODO,
  id: number,
  text: string
}

export const TOGGLE_TODO = TodoAction.TOGGLE_TODO
export type ToggleTodoAction = {
  type: TodoAction.TOGGLE_TODO
  id: number
}

