import React from 'react'
import Nav from '../nav/Nav'
import Logo from '../../assets/shared/logo.svg'

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="fixed z-20 grid w-full grid-cols-nav  px-6 md:px-0 xl:top-10">
      <Link
        to="/"
        className="flex items-center sm:justify-center "
      >
        <img
          src={Logo}
          alt="space logo"
          className="block py-6"
        />
      </Link>
      <div className="flex justify-end overflow-hidden">
        <Nav />
      </div>
    </header>
  )
}

export default Header
