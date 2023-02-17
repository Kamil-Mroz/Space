import React from 'react'
import { Outlet, useParams, Navigate } from 'react-router-dom'

const TechnologyRoot = () => {
  if (!Object.keys(useParams()).length) return <Navigate to="/technology/1" />
  return (
    <section className=" grid items-stretch pb-20 pt-24 sm:pt-36 sm:pb-0 lg:pt-52">
      <Outlet />
    </section>
  )
}

export default TechnologyRoot
