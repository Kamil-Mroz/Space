import React from 'react'

const NavIcon = ({ url, name }) => {
  return (
    <button>
      <img
        src={url}
        alt={name}
        className="h-6 w-6"
      />
    </button>
  )
}

export default NavIcon
