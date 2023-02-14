import React from 'react'

const Paragraph = ({ children }) => {
  return (
    <p className="lg:text-base md:text-sm text-xs lg:leading-8 sm:leading-7 leading-6">
      {children}
    </p>
  )
}

export default Paragraph
