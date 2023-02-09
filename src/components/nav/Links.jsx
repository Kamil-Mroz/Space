import React from 'react'
import LinkNav from './LinkNav'

const Links = () => {
  const pages = ['home', 'destination', 'crew', 'technology']

  const content = pages.map((page, index) => (
    <LinkNav
      page={page}
      id={index}
      key={index}
    />
  ))
  return content
}

export default Links
