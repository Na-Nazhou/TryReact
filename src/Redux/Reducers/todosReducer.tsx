import { TodoState } from "../Types/States/TodoState"
import { TodoActionTypes, AddTodoAction, ToggleTodoAction, ADD_TODO, TOGGLE_TODO } from "../Types/Actions/TodoActions"
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
        return state.map((todo, index) => {
          if (index === (action as ToggleTodoAction).id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
        return state
    }
  }

export default todos