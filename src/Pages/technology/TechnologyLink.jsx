import React from 'react'
import { NavLink } from 'react-router-dom'

const TechnologyLink = ({ tech, id }) => {
  return (
    <NavLink
      to={`/technology/${id}`}
      className={({ isActive }) =>
        `flex h-10 w-10 items-center justify-center rounded-full border sm:h-14 sm:w-14 xl:h-20 xl:w-20  ${
          isActive
            ? 'border-light bg-light text-dark'
            : 'border-light/25 bg-transparent text-light hover:border-light'
        }`
      }
    >
      {id}
    </NavLink>
  )
}

export default TechnologyLink
