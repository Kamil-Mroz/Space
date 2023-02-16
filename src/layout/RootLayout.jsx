import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const RootLayout = () => {
  return (
    <div className="bg-dark min-h-screen md:max-h-screen text-accent grid relative overflow-hidden">
      <Header />
      <main className="grid items-stretch">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
