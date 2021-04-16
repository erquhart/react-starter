import React from 'react'

const Nav = ({ onLogout, children }) => {
  return (
    <div>
      {children}
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Nav
