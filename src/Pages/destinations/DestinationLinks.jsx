import React from 'react'
import { NavLink } from 'react-router-dom'

const DestinationLinks = ({ planet }) => {
  return (
    <NavLink
      to={`/destination/${planet.name.toLowerCase()}`}
      className={({ isActive }) =>
        `relative py-2 font-normal uppercase tracking-wider before:absolute before:bottom-0 before:h-1  before:w-full before:transition-colors sm:py-4 sm:tracking-wide ${
          isActive
            ? 'text-light before:bg-light'
            : 'before:bg-transparent hover:before:bg-light/50 '
        }`
      }
    >
      {planet.name}
    </NavLink>
  )
}

export default DestinationLinks
