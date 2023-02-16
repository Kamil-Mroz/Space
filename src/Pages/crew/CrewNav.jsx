import React from 'react'
import CrewLink from './CrewLink'

const CrewNav = ({ crew }) => {
  return (
    <aside className=" xl:pt-28 sm:py-10 py-8 flex lg:justify-start justify-center  lg:gap-6 gap-4 order-2">
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
