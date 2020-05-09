import {
  ADD_TODO,
  TOGGLE_TODO,
  AddTodoAction,
  ToggleTodoAction
} from "../Types/Actions/TodoActions";
import {
  SET_VISIBILITY_FILTER,
  SetVisibilityFilterAction
} from "../Types/Actions/VisibilityFilterAction"
import {
  VisibilityFilterState
} from "../Types/States/VisibilityFilterState"

let nextTodoId = 0
export const addTodo = (text: string): AddTodoAction => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}
// const boundAddTodo = text => dispatch(addTodo(text))

export const toggleTodo = (id: number): ToggleTodoAction => {
  return { type: TOGGLE_TODO, id }
}

export const setVisibilityFilter = (filter: VisibilityFilterState): SetVisibilityFilterAction => {
  return { type: SET_VISIBILITY_FILTER, filter }
}