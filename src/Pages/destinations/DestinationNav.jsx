import React from 'react'
import DestinationLinks from './DestinationLinks'
const DestinationNav = ({ planets }) => {
  return (
    <aside className="flex items-center justify-center gap-6 font-sans text-xs sm:gap-6 sm:text-sm lg:justify-start lg:gap-8">
      {planets.map((planet) => (
        <DestinationLinks
          planet={planet}
          key={planet.name}
        />
      ))}
    </aside>
  )
}

export default DestinationNav
