import React from 'react'
import { useParams } from 'react-router-dom'

const technology = () => {
  const { id: technologyId } = useParams()

  return <section className="lg:pt-52">technology</section>
}

export default technology
