import React from 'react'
import Links from './Links'

const Nav = () => {
  return (
    <nav className="text-light font-sans flex  justify-center items-center ">
      <ul className="flex  px-36 gap-12">
        <Links />
      </ul>
    </nav>
  )
}

export default Nav
