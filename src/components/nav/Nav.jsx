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
        className={`fixed h-screen w-2/3 text-light backdrop-blur-xl md:h-auto lg:backdrop-blur-sm ${
          navOpen
            ? 'visible   translate-x-6 opacity-100'
            : 'invisible translate-x-full opacity-0'
        } z-0 items-center justify-self-end bg-light/5 font-sans text-sm  transition-all before:absolute  before:top-1/2 before:-left-full before:h-px before:w-full before:translate-x-8 before:-translate-y-1/2 sm:px-10 sm:text-xs md:visible md:relative md:flex md:w-max md:translate-x-0 md:px-12 md:text-sm md:opacity-100 md:transition-none lg:pl-32 lg:pr-40  xl:before:bg-light/50`}
      >
        <ul className="mt-32 flex flex-col gap-8 pl-8 sm:gap-5 md:mt-0 md:flex-row md:gap-9 md:pl-0 lg:gap-12">
          <Links setNavOpen={setNavOpen} />
        </ul>
      </nav>
      <div
        className="z-10 self-center md:invisible md:hidden"
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
