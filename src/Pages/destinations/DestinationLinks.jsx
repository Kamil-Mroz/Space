import React from 'react'
import { NavLink } from 'react-router-dom'

const DestinationLinks = ({ planet }) => {
  return (
    <NavLink
      to={`/destination/${planet.name.toLowerCase()}`}
      className={({ isActive }) =>
        ` uppercase tracking-wide sm:py-4 before:h-1 before:w-full  before:absolute before:bottom-0 before:transition-colors ${
          isActive
            ? 'sm:before:bg-light '
            : 'sm:before:bg-transparent hover:before:bg-light/50 '
        }`
      }
    >
      {planet.name}
    </NavLink>
  )
}

export default DestinationLinks
