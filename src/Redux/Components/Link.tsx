import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getVisibilityFilter } from '../Selectors/visibilityFilterSelector'
import { VisibilityFilterState } from '../Types/States/VisibilityFilterState'
import { setVisibilityFilter } from '../Actions/visibilityFilterActions'

type LinkProps = {
  filter: VisibilityFilterState
}

const Link: React.FC<LinkProps> = ({ filter, children }) => {

  const currentFilter = useSelector(getVisibilityFilter)
  const active = filter === currentFilter

  const dispatch = useDispatch()
  const handleClick = useCallback(() => dispatch(setVisibilityFilter(filter)), [dispatch, filter])

  return (
    <button
      onClick={handleClick}
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