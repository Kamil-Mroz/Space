import React from 'react'

const SubHeading = ({ id, children }) => {
  return (
    <p className="flex justify-center gap-5 font-sans text-sm uppercase tracking-wider text-light sm:justify-start sm:text-[1.25rem] sm:tracking-wide lg:col-start-2 lg:text-md lg:tracking-widest">
      <span className="font-bold text-light/25">
        {`${id}`.padStart(2, '0')}
      </span>
      {children}
    </p>
  )
}

export default SubHeading
