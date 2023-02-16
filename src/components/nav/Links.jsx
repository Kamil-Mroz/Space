import React from 'react'
import LinkNav from './LinkNav'

const Links = ({ setNavOpen }) => {
  const pages = ['home', 'destination', 'crew', 'technology']

  const content = pages.map((page, index) => (
    <LinkNav
      page={page}
      id={index}
      key={index}
      setNavOpen={setNavOpen}
    />
  ))
  return content
}

export default Links
