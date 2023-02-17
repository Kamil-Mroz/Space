import React from 'react'
import CrewLink from './CrewLink'

const CrewNav = ({ crew }) => {
  return (
    <aside className=" order-2 flex justify-center gap-4 py-8 sm:py-10  lg:justify-start lg:gap-6 xl:pt-28">
      {crew.map((member, id) => (
        <CrewLink
          key={member.name}
          member={member}
          id={id + 1}
        />
      ))}
    </aside>
  )
}

export default CrewNav
