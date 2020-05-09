import { combineReducers } from 'redux'
import todos from './todosReducer';
import visibilityFilter from './visibilityFilterReducer'
import { VisibilityFilter } from '../Types/States/VisibilityFilterState'
import { AppState } from '../Types/States/AppState';
const { SHOW_ALL } = VisibilityFilter

export const initialState: AppState = {
  todos: [],
  visibilityFilter: SHOW_ALL,
}

// default argument syntax
// export function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//       })
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: todos(state.todos, action)
//       })
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: todos(state.todos, action)
//       })
//     default:
//       return state
//   }
// }

// const todoApp = (state = {}, action) => {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export default rootReducer