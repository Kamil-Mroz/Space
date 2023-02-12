import React from 'react'
import { Link } from 'react-router-dom'
import HomeDesktop from '../../assets/home/background-home-desktop.jpg'
import HomeTablet from '../../assets/home/background-home-tablet.jpg'
import HomeMobile from '../../assets/home/background-home-mobile.jpg'
const Home = () => {
  return (
    <>
      <picture className="absolute  inset-0 z-0 object-cover">
        <img
          src={HomeMobile}
          srcSet={`
            ${HomeDesktop} 375w,
            ${HomeTablet} 768w,
            ${HomeDesktop} 1440w
        `}
          alt=""
          className="w-full h-full "
        />
      </picture>
      <section className=" lg:pt-52 md:pt-48 lg:gap-0 md:gap-40  grid lg:grid-cols-2 grid-cols-1 sm:px-[10.25rem] px-6 lg:pb-32 md:pb-20 pb-12  min-h-full md:max-h-screen items-end ">
        <div className="coll flex flex-col lg:w-min lg:text-left text-center  z-10">
          <h5 className="xl:text-md md:text-[1.25rem] text-sm xl:tracking-widest md:tracking-wide tracking-wider uppercase font-sans">
            So, you want to travel to
          </h5>
          <h1 className="xl:text-5xl  md:text-4xl text-[5rem] text-light uppercase font-serif">
            Space
          </h1>
          <p className="lg:text-base md:text-sm text-xs">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="coll lg:justify-self-end justify-self-center z-10">
          <Link
            to="/destination"
            className="flex justify-center items-center  before:duration-200 before:ease-in-out before:transition-all md:text-xl text-[1.25rem] tracking-[2px] rounded-full uppercase relative aspect-square xl:w-[17.125rem]  md:w-[15.125rem] w-[9.375rem] text-dark bg-light xl:hover:before:w-[28.125rem] xl:hover:before:h-[28.125rem] lg:before:w-0 lg:before:h-0 lg:before:rounded-full before:absolute lg:before:bg-light/10 lg:before:top-1/2 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:-translate-y-1/2 lg:hover:before:w-[22rem] lg:hover:before:h-[22rem]  font-sans"
          >
            Explore
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
