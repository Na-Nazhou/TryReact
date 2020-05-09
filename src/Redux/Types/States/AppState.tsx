import { TodoState } from './TodoState'
import { VisibilityFilterState } from "./VisibilityFilterState";

export type AppState = {
  todos: TodoState
  visibilityFilter: VisibilityFilterState
}