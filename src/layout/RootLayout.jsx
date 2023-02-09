import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const RootLayout = () => {
  return (
    <div className="bg-dark min-h-screen md:max-h-screen text-accent">
      <Header />
      <div className="pt-52">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
