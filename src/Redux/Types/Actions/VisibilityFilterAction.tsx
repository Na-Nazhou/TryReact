
import { VisibilityFilterState } from '../States/VisibilityFilterState'

enum VisibilityFilterAction {
  SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
}

export const SET_VISIBILITY_FILTER = VisibilityFilterAction.SET_VISIBILITY_FILTER
export type SetVisibilityFilterAction = {
  type: VisibilityFilterAction.SET_VISIBILITY_FILTER,
  filter: VisibilityFilterState
}