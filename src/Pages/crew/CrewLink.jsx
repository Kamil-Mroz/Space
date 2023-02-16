import React from 'react'
import { NavLink } from 'react-router-dom'
const CrewLink = ({ member, id }) => {
  return (
    <NavLink
      to={`/crew/${id}`}
      className={({ isActive }) =>
        `${
          isActive ? 'bg-light' : 'bg-light/20 hover:bg-light/60'
        }  w-[0.625rem] h-[0.625rem] rounded-full block`
      }
      title={member.name}
    />
  )
}

export default CrewLink
