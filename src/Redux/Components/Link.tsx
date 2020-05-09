import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getVisibilityFilter } from '../Selectors/visibilityFilterSelector'
import { VisibilityFilterState } from '../Types/States/VisibilityFilterState'
import { setVisibilityFilter } from '../Actions/actionCreators'

type LinkProps = {
  filter: VisibilityFilterState
}

const Link: React.FC<LinkProps> = ({ filter, children }) => {

  const currentFilter = useSelector(getVisibilityFilter)
  const active = filter === currentFilter

  const dispatch = useDispatch()
  const onClick = useCallback(() => dispatch(setVisibilityFilter(filter)), [dispatch, filter])

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  )
}

export default Link