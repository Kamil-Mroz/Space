import React from 'react'

const NavIcon = ({ url, name }) => {
  return (
    <img
      src={url}
      alt={name}
      className="w-6 h-6"
    />
  )
}

export default NavIcon
