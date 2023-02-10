import React from 'react'
import Nav from '../nav/Nav'
import Logo from '../../assets/shared/logo.svg'

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="grid grid-cols-main fixed xl:top-10 w-full px-6 sm:px-0">
      <Link
        to="/"
        className="flex sm:justify-center items-center "
      >
        <img
          src={Logo}
          alt="space logo"
          className="block py-6"
        />
      </Link>
      <div className="overflow-hidden flex justify-end">
        <Nav />
      </div>
    </header>
  )
}

export default Header
