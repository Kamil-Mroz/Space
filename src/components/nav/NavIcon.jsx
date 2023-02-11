import React from 'react'

const NavIcon = ({ url, name }) => {
  return (
    <button>
      <img
        src={url}
        alt={name}
        className="w-6 h-6"
      />
    </button>
  )
}

export default NavIcon
