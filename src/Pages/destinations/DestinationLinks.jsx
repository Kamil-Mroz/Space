import React from 'react'
import { NavLink } from 'react-router-dom'

const DestinationLinks = ({ planet }) => {
  return (
    <NavLink
      to={`/destination/${planet.name.toLowerCase()}`}
      className={({ isActive }) =>
        `uppercase font-normal sm:tracking-wide tracking-wider sm:py-4 py-2 before:h-1 before:w-full  before:absolute before:bottom-0 before:transition-colors relative ${
          isActive
            ? 'before:bg-light text-light'
            : 'before:bg-transparent hover:before:bg-light/50 '
        }`
      }
    >
      {planet.name}
    </NavLink>
  )
}

export default DestinationLinks
