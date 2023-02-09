import React from 'react'
import Nav from '../nav/Nav'
import Logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="grid grid-cols-main fixed top-10 w-full">
      <Link
        to="/"
        className="flex justify-center items-center"
      >
        <img
          src={Logo}
          alt="space logo"
          className="block"
        />
      </Link>
      <Nav />
    </header>
  )
}

export default Header
