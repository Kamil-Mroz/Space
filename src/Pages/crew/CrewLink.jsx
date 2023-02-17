import React from 'react'
import { NavLink } from 'react-router-dom'
const CrewLink = ({ member, id }) => {
  return (
    <NavLink
      to={`/crew/${id}`}
      className={({ isActive }) =>
        `${
          isActive ? 'bg-light' : 'bg-light/20 hover:bg-light/60'
        } block h-[0.625rem]  w-[0.625rem] rounded-full lg:h-4 lg:w-4`
      }
      title={member.name}
    />
  )
}

export default CrewLink
