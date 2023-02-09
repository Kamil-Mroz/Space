import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav'
const RootLayout = () => {
  return (
    <div className="bg-dark min-h-screen md:max-h-screen text-accent">
      <Nav />
      <Outlet />
    </div>
  )
}

export default RootLayout
