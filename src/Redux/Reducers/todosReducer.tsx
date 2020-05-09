import { TodoState } from "../Types/States/TodoState"
import { TodoActionTypes, AddTodoAction, ToggleTodoAction, ADD_TODO, TOGGLE_TODO, DELETE_TODO, DeleteTodoAction } from "../Types/Actions/TodoActions"
import { initialState } from "./rootReducer"

const todos: (state: TodoState, action: TodoActionTypes) => TodoState
  = (state = initialState.todos, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: (action as AddTodoAction).text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map((todo) => {
          if (todo.id === (action as ToggleTodoAction).id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      case DELETE_TODO:
        return state.filter((todo) => {
          if (todo.id === (action as DeleteTodoAction).id) {
            return false
          }
          return true
        })
      default:
        return state
    }
  }

export default todos