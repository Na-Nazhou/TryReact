enum TodoAction {
  ADD_TODO = "ADD_TODO",
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

export type TodoActionTypes = AddTodoAction | ToggleTodoAction

