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
      <div className="grid lg:grid-cols-tabletMain grid-cols-1  place-content-start lg:gap-y-16 sm:gap-14 sm:pt-14 xl:pr-40 lg:pl-0 md:px-10 z-10">
        <SubHeading id={1}>Pick your destination</SubHeading>

        <div className="grid lg:grid-cols-2  grid-cols-1 lg:col-start-2  lg:gap-3 sm:gap-14 items-center lg:px-0 sm:px-14 justify-items-center lg:text-left text-center">
          <picture className="w-[18.75rem]">
            <source
              type="image/webp"
              srcSet={webp}
            />
            <img
              src={jpg}
              alt={data.name}
            />
          </picture>
          <div className="flex flex-col xl:gap-7 ">
            <DestinationNav planets={destinations} />
            <h2 className=" sm:text-[5rem] xl:text-3xl  md:text-[5rem]  text-light font-serif uppercase tracking-[0.5rem]">
              {data.name}
            </h2>
            <Paragraph>{data.description}</Paragraph>
            <div className="border-t-[1px] border-light/5  uppercase grid grid-cols-2 justify-between xl:pt-7 md:pt-3 mt-4">
              <div className="flex flex-col  xl:gap-3 md:gap-0  ">
                <p className="font-sans text-xs tracking-wide">avg. distance</p>
                <p className="font-serif text-light text-md">{data.distance}</p>
              </div>
              <div className="flex flex-col xl:gap-3 md:gap-0">
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
