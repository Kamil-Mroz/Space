import React from 'react'

const BackgroundImg = ({ images }) => {
  return (
    <picture className="absolute  inset-0 z-0 object-cover">
      <source
        media="(min-width:769px)"
        srcSet={images.lg}
      />
      <source
        media="(min-width:376px)"
        srcSet={images.md}
      />
      <source srcSet={images.sm} />
      <img
        src={images.lg}
        alt={images.alt}
        className="h-full w-full"
      />
    </picture>
  )
}

export default BackgroundImg
