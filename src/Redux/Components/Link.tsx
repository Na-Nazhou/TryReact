import React from 'react'

export type StateProps = {
  active: boolean
}

export type DispatchProps = {
  onClick: () => void
}

type LinkProps = StateProps & DispatchProps

const Link: React.FC<LinkProps> = ({ active, children, onClick }) => {
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