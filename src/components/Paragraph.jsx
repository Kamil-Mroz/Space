import React from 'react'

const Paragraph = ({ children }) => {
  return (
    <p className="lg:text-base md:text-sm text-xs xl:leading-8 leading-6 ">
      {children}
    </p>
  )
}

export default Paragraph
