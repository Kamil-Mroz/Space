import React from 'react'

const Paragraph = ({ children }) => {
  return (
    <p className="text-xs leading-6 md:text-sm lg:text-base xl:leading-8  ">
      {children}
    </p>
  )
}

export default Paragraph
