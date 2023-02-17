import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const RootLayout = () => {
  return (
    <div className="relative grid min-h-screen overflow-hidden bg-dark text-accent md:max-h-screen">
      <Header />
      <main className="grid items-stretch">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
