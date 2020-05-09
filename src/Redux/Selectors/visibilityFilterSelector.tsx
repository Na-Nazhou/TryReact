import { AppState } from '../Types/States/AppState'
import { VisibilityFilterState } from '../Types/States/VisibilityFilterState';

export const getVisibilityFilter = (state: AppState): VisibilityFilterState => state.visibilityFilter;