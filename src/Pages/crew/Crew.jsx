import React from 'react'
import { useParams } from 'react-router-dom'

const Crew = () => {
  const { id: crewId } = useParams()

  return <section className="lg:pt-52">Crew</section>
}

export default Crew
