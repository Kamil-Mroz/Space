import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import Paragraph from '../../components/Paragraph'
import DestinationNav from './DestinationNav'
import SubHeading from '../../components/SubHeading'
import DestinationDesktop from '../../assets/destination/background-destination-desktop.jpg'
import DestinationTablet from '../../assets/destination/background-destination-tablet.jpg'
import DestinationMobile from '../../assets/destination/background-destination-mobile.jpg'
import BackgroundImg from '../../components/BackgroundImg'
const Destination = () => {
  const { id: planetId } = useParams()
  const { destinations } = useContext(DataContext)

  const data = destinations.find((planet) =>
    planet.name.toLowerCase() === planetId ? planet : ''
  )
  const [jpg, webp] = Object.values(data.images).map(
    (img) => new URL(img, import.meta.url).href
  )
  return (
    <>
      <BackgroundImg
        images={{
          lg: DestinationDesktop,
          md: DestinationTablet,
          sm: DestinationMobile,
          alt: 'void',
        }}
      />
      <div className="grid grid-cols-tabletMain place-content-start gap-y-16 pr-40 z-10">
        <SubHeading id={1}>Pick your destination</SubHeading>

        <div className="grid grid-cols-2 col-start-2 items-center justify-items-center">
          <picture>
            <source
              type="image/webp"
              srcSet={webp}
            />
            <img
              src={jpg}
              alt={data.name}
            />
          </picture>
          <div className="flex flex-col gap-7">
            <DestinationNav planets={destinations} />
            <h2 className="lg:text-3xl sm:text-[5rem] text-2xl  text-light font-serif uppercase tracking-[0.5rem]">
              {data.name}
            </h2>
            <Paragraph>{data.description}</Paragraph>
            <div className="border-t-[1px] border-light/5  uppercase grid grid-cols-2 justify-between pt-7">
              <div className="flex flex-col  gap-3  ">
                <p className="font-sans text-xs tracking-wide">avg. distance</p>
                <p className="font-serif text-light text-md">{data.distance}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-sans text-xs tracking-wide">
                  Est. travel time
                </p>
                <p className="font-serif text-light text-md">{data.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Destination
