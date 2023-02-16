import React from 'react'
import CrewLink from './CrewLink'

const CrewNav = ({ crew }) => {
  return (
    <aside className="py-8 flex justify-center gap-4">
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
