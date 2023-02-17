import React from 'react'
import TechnologyLink from './TechnologyLink'

const TechnologyNav = ({ technology }) => {
  return (
    <aside className="mb-6 flex justify-center gap-4 sm:mb-11 lg:flex-col lg:gap-8">
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
