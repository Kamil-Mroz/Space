import React from 'react'
import { Outlet, useParams, Navigate } from 'react-router-dom'
const DestinationRoot = () => {
  if (!Object.keys(useParams()).length)
    return <Navigate to="/destination/moon" />
  return (
    <section className="grid items-stretch overflow-hidden pt-28 pb-14 md:pt-32 md:pb-0 lg:pt-24 xl:pt-40 2xl:pt-44">
      <Outlet />
    </section>
  )
}

export default DestinationRoot
