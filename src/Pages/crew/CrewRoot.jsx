import React from 'react'
import { Outlet, useParams, Navigate } from 'react-router-dom'

const CrewRoot = () => {
  if (!Object.keys(useParams()).length) return <Navigate to="/crew/1" />
  return (
    <section className="lg:pt-52 pt-24 pb-20 grid items-stretch">
      <Outlet />
    </section>
  )
}

export default CrewRoot
