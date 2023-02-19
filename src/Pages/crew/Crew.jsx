import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import SubHeading from '../../components/SubHeading'
import Paragraph from '../../components/Paragraph'
import CrewNav from './CrewNav'
import BackgroundImg from '../../components/BackgroundImg'
import CrewDesktop from '../../assets/crew/background-crew-desktop.jpg'
import CrewTablet from '../../assets/crew/background-crew-tablet.jpg'
import CrewMobile from '../../assets/crew/background-crew-mobile.jpg'

const Crew = () => {
  const { id: crewMember } = useParams()
  const { crew } = useContext(DataContext)

  const data = crew.find((member, id) => id + 1 === Number(crewMember))
  const [png, webp] = Object.values(data.images).map(
    (img) => new URL(img, import.meta.url).href
  )
  console.log(png)
  return (
    <>
      <BackgroundImg
        images={{
          lg: CrewDesktop,
          md: CrewTablet,
          sm: CrewMobile,
          alt: 'ice planet',
        }}
      />
      <div className="z-10  grid grid-cols-1 gap-y-8 px-6 sm:gap-y-12  lg:grid-cols-tabletMain lg:px-0 lg:pr-20">
        <SubHeading id={2}>Meet your crew</SubHeading>
        <div className="grid grid-cols-1 gap-y-8 sm:px-16 lg:col-start-2 lg:grid-cols-2 lg:px-0">
          <picture className="self-end border-b border-b-light/5 sm:order-2 ">
            <source
              type="image/webp"
              srcSet={webp}
            />
            <img
              src={png}
              alt={data.name}
              className="mx-auto h-56 w-auto sm:h-[33.25rem] xl:h-[40rem]"
            />
          </picture>
          <article className="order-1 grid self-center text-center lg:content-start lg:text-left">
            <CrewNav crew={crew} />
            <div className="order-1">
              <div className="pb-4 sm:pb-0">
                <h4 className="font-serif text-sm uppercase tracking-[1px] text-light/50 md:text-[1.5rem]">
                  {data.role}
                </h4>
                <h3 className="font-serif text-[1.5rem] uppercase tracking-[1px] text-light md:text-[2.5rem] xl:text-[3.125rem]">
                  {data.name}
                </h3>
              </div>
              <Paragraph>{data.bio}</Paragraph>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Crew
