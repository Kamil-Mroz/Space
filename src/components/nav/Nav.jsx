import React from 'react'
import Links from './Links'

const Nav = () => {
  return (
    <nav className="text-light backdrop-blur-sm font-sans flex relative pl-32 pr-40 w-max items-center bg-light/5 justify-self-end before:h-px before:w-10/12 before:absolute before:bg-light/50 before:top-1/2 before:-left-2/4 before:-translate-x-1/3  before:-translate-y-1/2">
      <ul className="flex gap-12">
        <Links />
      </ul>
    </nav>
  )
}

export default Nav
