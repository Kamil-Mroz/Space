import React from 'react'
import DestinationLinks from './DestinationLinks'
const DestinationNav = ({ planets }) => {
  return (
    <aside className="flex items-center lg:gap-8 font-sans text-sm">
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
