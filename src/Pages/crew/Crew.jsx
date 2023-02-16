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
      <div className="grid grid-cols-1 px-6 gap-y-8 z-10">
        <SubHeading id={2}>Meet your crew</SubHeading>
        <div className="grid grid-cols-1 gap-y-8 ">
          <picture className="border-b  border-b-light/5">
            <source srcSet={webp} />
            <img
              src={png}
              alt={data.name}
              className="h-56 w-auto mx-auto"
            />
          </picture>
          <article className="text-center">
            <CrewNav crew={crew} />
            <div>
              <div className="pb-4">
                <h4 className="text-light/50 text-sm uppercase font-serif tracking-[1px]">
                  {data.role}
                </h4>
                <h3 className="text-light text-[1.5rem] uppercase font-serif tracking-[1px]">
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
