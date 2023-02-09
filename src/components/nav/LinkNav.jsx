import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkNav = ({ page, id }) => {
  const idx = `${id}`.padStart(2, 0)
  const pageHref = id === 0 ? '/' : `/${page}`
  return (
    <li className="relative">
      <NavLink
        to={pageHref}
        className={({ isActive }) =>
          `uppercase tracking-wide flex gap-4 py-8 before:h-1 before:w-full  before:absolute before:bottom-0 hover:before:bg-light/50 ${
            isActive ? 'before:bg-light' : 'before:bg-transparent'
          }`
        }
      >
        <span className="font-bold">{idx}</span> {page}
      </NavLink>
    </li>
  )
}

export default LinkNav
