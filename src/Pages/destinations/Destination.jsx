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

  const data = destinations.find(
    (planet) => planet.name.toLowerCase() === planetId
  )
  const [jpg, webp] = Object.values(data.images).map(
    (img) =>
      new URL(img, 'https://github.com/Kamil-Mroz/Space/blob/main/src/assets/')
        .href
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
      <div className="z-10 grid grid-cols-1  place-content-start gap-8 px-6 sm:gap-14 sm:px-10 sm:pt-14 lg:grid-cols-tabletMain lg:gap-y-16 lg:pl-0 xl:pr-40 ">
        <SubHeading id={1}>Pick your destination</SubHeading>

        <div className="grid grid-cols-1  items-center justify-items-center  gap-7 text-center sm:gap-14 md:px-14 lg:col-start-2 lg:grid-cols-2 lg:gap-3 lg:px-0 lg:text-left">
          <picture className="w-[12rem] md:w-[18.75rem] lg:w-full">
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
            <h2 className=" font-serif text-2xl  uppercase  tracking-[0.5rem] text-light sm:text-[5rem] md:text-[5rem] xl:text-3xl">
              {data.name}
            </h2>
            <Paragraph>{data.description}</Paragraph>
            <div className="mt-4 grid  grid-cols-1 gap-5 border-t-[1px] border-light/5 pt-4 uppercase sm:justify-between md:grid-cols-2 md:pt-3 xl:pt-7">
              <div className="flex flex-col  md:gap-0 xl:gap-3  ">
                <p className="font-sans text-xs tracking-wide">avg. distance</p>
                <p className="font-serif text-md text-light">{data.distance}</p>
              </div>
              <div className="flex flex-col md:gap-0 xl:gap-3">
                <p className="font-sans text-xs tracking-wide">
                  Est. travel time
                </p>
                <p className="font-serif text-md text-light">{data.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Destination
