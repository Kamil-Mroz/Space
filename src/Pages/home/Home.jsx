import React from 'react'
import { Link } from 'react-router-dom'
import HomeDesktop from '../../assets/home/background-home-desktop.jpg'
import HomeTablet from '../../assets/home/background-home-tablet.jpg'
import HomeMobile from '../../assets/home/background-home-mobile.jpg'
const Home = () => {
  return (
    <>
      <picture className="absolute tablet:top-0 tablet:right-0 z-0 tablet:rotate-0 rotate-90 object-fill ">
        <img
          src={HomeDesktop}
          srcSet={`${HomeDesktop} 1440w,
        ${HomeTablet} 720w,
        ${HomeMobile} 375w`}
          sizes=" (min-width:720px) 1440px,(min-width:376px) 720px, 375px "
          alt=""
          className="block"
        />
      </picture>
      <section className=" lg:pt-52 grid grid-cols-2 px-[10.25rem] pb-32 min-h-full max-h-screen items-end ">
        <div className="coll flex lg:flex-col lg:w-min z-10">
          <h5 className="lg:text-md tracking-widest uppercase font-sans">
            So, you want to travel to
          </h5>
          <h1 className="lg:text-4xl text-light uppercase font-serif">Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="coll justify-self-end z-10">
          <Link
            to="/destination"
            className="grid place-items-center  before:duration-200 before:ease-in-out before:transition-all lg:text-xl tracking-[2px] rounded-full uppercase relative aspect-square lg:w-[17.125rem] text-dark bg-light lg:hover:before:w-[28.125rem] lg:hover:before:h-[28.125rem] lg:before:w-0 lg:before:h-0 lg:before:rounded-full lg:before:absolute lg:before:bg-light/10 lg:before:top-1/2 lg:before:left-1/2 lg:before:-translate-x-1/2 lg:before:-translate-y-1/2  font-sans "
          >
            Explore
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
