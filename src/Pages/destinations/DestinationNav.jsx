import React from 'react'
import DestinationLinks from './DestinationLinks'
const DestinationNav = ({ planets }) => {
  return (
    <aside className="flex items-center lg:gap-8 sm:gap-6 gap-6 font-sans sm:text-sm text-xs lg:justify-start justify-center">
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
