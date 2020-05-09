import { VisibilityFilterState } from "../Types/States/VisibilityFilterState"
import { SetVisibilityFilterAction, SET_VISIBILITY_FILTER } from "../Types/Actions/VisibilityFilterAction"
import { initialState } from "./rootReducer"

const visibilityFilter: (state: VisibilityFilterState, action: SetVisibilityFilterAction) => VisibilityFilterState
  = (state = initialState.visibilityFilter, action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return state
    }
  }

export default visibilityFilter