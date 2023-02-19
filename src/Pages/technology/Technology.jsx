import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import Subheading from '../../components/SubHeading'
import TechnologyNav from './TechnologyNav'
import Paragraph from '../../components/Paragraph'
import BackgroundImg from '../../components/BackgroundImg'
import TechnologyDesktop from '../../assets/technology/background-technology-desktop.jpg'
import TechnologyTablet from '../../assets/technology/background-technology-tablet.jpg'
import TechnologyMobile from '../../assets/technology/background-technology-mobile.jpg'

const technology = () => {
  const { id: technologyId } = useParams()
  const { technology } = useContext(DataContext)
  const data = technology.find((_, id) => id + 1 === Number(technologyId))
  const [desktop, mobile] = Object.values(data.images).map(
    (img) =>
      new URL(img, 'https://github.com/Kamil-Mroz/Space/blob/main/src/assets/')
        .href
  )

  return (
    <>
      <BackgroundImg
        images={{
          lg: TechnologyDesktop,
          md: TechnologyTablet,
          sm: TechnologyMobile,
          alt: 'void',
        }}
      />
      <div className="z-10 grid grid-cols-1 gap-y-8 sm:gap-y-16 lg:grid-cols-tabletMain">
        <div className="sm:px-10 lg:col-start-2 lg:px-0">
          <Subheading id={3}>Space Launch 101</Subheading>
        </div>

        <article className=" grid grid-cols-1 gap-y-8 sm:gap-y-14 md:grid-cols-2 md:gap-x-5 lg:col-start-2">
          <picture className="w-full md:order-2  lg:justify-self-end xl:w-9/12 2xl:w-8/12">
            <source
              media="(min-width:768px)"
              srcSet={desktop}
            />
            <source srcSet={mobile} />
            <img
              src={desktop}
              alt={data.name}
              className="h-full w-full"
            />
          </picture>
          <div className="grid gap-4 px-8 sm:px-36 md:self-center md:px-3  lg:grid-cols-[min-content,1fr]  lg:px-0 xl:gap-20">
            <TechnologyNav technology={technology} />
            <div className="text-center lg:self-center  lg:text-left">
              <p className="font-sans text-xs uppercase tracking-wider sm:text-sm">
                The Terminology...
              </p>
              <h3 className="font-serif text-[1.5rem] uppercase tracking-[1px] text-light lg:text-[2.5rem] xl:text-[3.125rem] ">
                {data.name}
              </h3>
              <Paragraph>{data.description}</Paragraph>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default technology
