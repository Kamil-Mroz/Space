import React from 'react'
import { Link } from 'react-router-dom'
import HomeDesktop from '../../assets/home/background-home-desktop.jpg'
import HomeTablet from '../../assets/home/background-home-tablet.jpg'
import HomeMobile from '../../assets/home/background-home-mobile.jpg'
import Paragraph from '../../components/Paragraph'
import BackgroundImg from '../../components/BackgroundImg'
const Home = () => {
  return (
    <>
      <BackgroundImg
        images={{
          lg: HomeDesktop,
          md: HomeTablet,
          sm: HomeMobile,
          alt: 'Earth from space',
        }}
      />
      <section className=" grid min-h-full grid-cols-1 items-end  px-6 pb-12 sm:px-[10.25rem] md:max-h-screen md:gap-40 md:pt-48 md:pb-20 lg:grid-cols-2  lg:gap-0 lg:pt-52 lg:pb-32 ">
        <div className="coll z-10 flex flex-col text-center lg:w-min  lg:text-left">
          <h5 className="font-sans text-sm uppercase tracking-wider md:text-[1.25rem] md:tracking-wide xl:text-md xl:tracking-widest">
            So, you want to travel to
          </h5>
          <h1 className="font-serif  text-[5rem] uppercase text-light md:text-4xl xl:text-5xl">
            Space
          </h1>

          <Paragraph>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Paragraph>
        </div>
        <div className="coll z-10 justify-self-center lg:justify-self-end">
          <Link
            to="/destination"
            className="relative flex aspect-square w-[9.375rem]  items-center justify-center rounded-full bg-light font-serif text-[1.25rem] uppercase tracking-[2px] text-dark before:absolute before:transition-all  before:duration-200 before:ease-in-out md:w-[15.125rem] md:text-xl lg:before:top-1/2 lg:before:left-1/2 lg:before:h-0 lg:before:w-0 lg:before:-translate-x-1/2 lg:before:-translate-y-1/2 lg:before:rounded-full lg:before:bg-light/10 lg:hover:before:h-[22rem] lg:hover:before:w-[22rem] xl:w-[17.125rem] xl:hover:before:h-[28.125rem] xl:hover:before:w-[28.125rem] "
          >
            Explore
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
