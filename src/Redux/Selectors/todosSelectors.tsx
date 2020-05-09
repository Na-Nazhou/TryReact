import { createSelector } from 'reselect'
import { getVisibilityFilter } from './visibilityFilterSelector'
import { AppState } from '../Types/States/AppState'
import { VisibilityFilter, VisibilityFilterState } from '../Types/States/VisibilityFilterState'
import { TodoState } from '../Types/States/TodoState'
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilter

const getTodos = (state: AppState): TodoState => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter: VisibilityFilterState, todos: TodoState): TodoState => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)

const getKeyword = (state: AppState): string => state.keyword

export const getVisibleTodosFilteredByKeyword = createSelector(
  [getVisibleTodos, getKeyword],
  (visibleTodos: TodoState, keyword: string): TodoState => visibleTodos.filter(
    todo => todo.text.includes(keyword)
  )
)
