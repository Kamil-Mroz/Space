import React from 'react'
import { Outlet, useParams, Navigate } from 'react-router-dom'
const DestinationRoot = () => {
  if (!Object.keys(useParams()).length)
    return <Navigate to="/destination/moon" />
  return (
    <section className="2xl:pt-52 xl:pt-40 lg:pt-24 md:pt-32 grid items-stretch overflow-hidden">
      <Outlet />
    </section>
  )
}

export default DestinationRoot
