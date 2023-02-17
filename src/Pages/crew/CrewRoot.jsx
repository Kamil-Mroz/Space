import React from 'react'
import { Outlet, useParams, Navigate } from 'react-router-dom'

const CrewRoot = () => {
  if (!Object.keys(useParams()).length) return <Navigate to="/crew/1" />
  return (
    <section className="grid items-stretch pt-24 pb-20 sm:pt-32 sm:pb-0 lg:pt-52">
      <Outlet />
    </section>
  )
}

export default CrewRoot
