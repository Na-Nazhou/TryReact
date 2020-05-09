
import {
  SET_VISIBILITY_FILTER,
  SetVisibilityFilterAction
} from "../Types/Actions/VisibilityFilterAction"
import {
  VisibilityFilterState
} from "../Types/States/VisibilityFilterState"

export const setVisibilityFilter = (filter: VisibilityFilterState): SetVisibilityFilterAction => {
  return { type: SET_VISIBILITY_FILTER, filter }
}