import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkNav = ({ page, id }) => {
  const idx = `${id}`.padStart(2, 0)
  const pageHref = id === 0 ? '/' : `/${page}`
  return (
    <li className="">
      <NavLink
        to={pageHref}
        className="uppercase tracking-wide flex gap-4 py-8"
      >
        <span className="font-bold">{idx}</span> {page}
      </NavLink>
    </li>
  )
}

export default LinkNav
