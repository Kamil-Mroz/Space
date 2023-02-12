import React, { useState } from 'react'
import Links from './Links'
import Menu from '../../assets/shared/icon-hamburger.svg'
import Close from '../../assets/shared/icon-close.svg'
import NavIcon from './NavIcon'
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <nav
        className={`text-light w-2/3 h-screen sm:h-auto fixed md:backdrop-blur-sm backdrop-blur-xl ${
          navOpen
            ? 'visible   opacity-100 translate-x-6'
            : 'invisible opacity-0 translate-x-full'
        } transition-all sm:transition-none sm:opacity-100 font-sans text-sm sm:text-xs  lg:text-sm sm:visible  sm:flex sm:relative lg:pl-32 md:px-12 sm:px-10 lg:pr-40 sm:w-max items-center bg-light/5 justify-self-end before:h-px before:w-full before:absolute xl:before:bg-light/50 before:top-1/2 before:-left-full before:translate-x-8 before:-translate-y-1/2 z-0  sm:translate-x-0`}
      >
        <ul className="flex flex-col sm:flex-row lg:gap-12 md:gap-9 sm:gap-5 gap-8 pl-8 sm:pl-0 mt-32 sm:mt-0">
          <Links />
        </ul>
      </nav>
      <div
        className="sm:invisible sm:hidden self-center z-10"
        onClick={() => setNavOpen((prev) => !prev)}
      >
        {navOpen ? (
          <NavIcon
            url={Close}
            name="close"
          />
        ) : (
          <NavIcon
            url={Menu}
            name="menu"
          />
        )}
      </div>
    </>
  )
}

export default Nav
