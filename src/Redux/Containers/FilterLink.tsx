import { connect } from 'react-redux';
import { setVisibilityFilter } from '../Actions/actionCreators';
import Link, { StateProps, DispatchProps } from '../Components/Link';
import { AppState } from '../Types/States/AppState';
import { VisibilityFilterState } from '../Types/States/VisibilityFilterState';
import { SetVisibilityFilterAction } from '../Types/Actions/VisibilityFilterAction';

type FilterLinkProps = {
  filter: VisibilityFilterState
}

const mapStateToProps: (state: AppState, ownProps: FilterLinkProps) => StateProps
  = (state, ownProps) => {
    return {
      active: ownProps.filter === state.visibilityFilter
    }
  }

const mapDispatchToProps: (dispatch: (action: SetVisibilityFilterAction) => void, ownProps: FilterLinkProps) => DispatchProps
  = (dispatch, ownProps): DispatchProps => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
    }
  }

const FilterLink: React.FC<FilterLinkProps> = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink