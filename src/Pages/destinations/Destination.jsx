import React from 'react'
import { useParams } from 'react-router-dom'

const Destination = () => {
  const { id: planetId } = useParams()

  return (
    <section className="lg:pt-52">
      <h2 className="lg:text-3xl sm:text-[5rem] text-2xl  text-light font-serif uppercase">
        Moon
      </h2>
    </section>
  )
}

export default Destination
