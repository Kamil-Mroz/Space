import React from 'react'

const SubHeading = ({ id, children }) => {
  return (
    <p className="text-light font-sans flex gap-5 lg:tracking-widest lg:text-md sm:tracking-wide sm:text-[1.25rem] text-sm tracking-wider">
      <span className="font-bold text-light/25">
        {id + ''.padStart(2, '0')}
      </span>
      {children}
    </p>
  )
}

export default SubHeading
