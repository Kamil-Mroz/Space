import React from 'react'
import { Outlet, useParams, Navigate } from 'react-router-dom'
const DestinationRoot = () => {
  if (!Object.keys(useParams()).length)
    return <Navigate to="/destination/moon" />
  return (
    <section className="lg:pt-52 grid items-stretch">
      <Outlet />
    </section>
  )
}

export default DestinationRoot
