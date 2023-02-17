import React from 'react'
import TechnologyLink from './TechnologyLink'

const TechnologyNav = ({ technology }) => {
  return (
    <aside className="mb-6 flex justify-center gap-4 sm:mb-11 lg:mb-0 lg:flex-col lg:gap-8 lg:justify-self-start">
      {technology.map((tech, id) => (
        <TechnologyLink
          tech={tech}
          id={id + 1}
          key={tech.name}
        />
      ))}
    </aside>
  )
}

export default TechnologyNav
