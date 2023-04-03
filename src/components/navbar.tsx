import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const navbar = () => {

  /* open or close the menu */
  /* you should never update state using the previous version of the same old state */
  const [toggle, setToggle] = useState(false)

  return (
  /* html5 semantic nav tag */
  /* all classNames are already made from tailwind css */
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>
      {/* navbar */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* navLinks have contents of  home, features, products, and clients that can be mapped */}
        {navLinks.map((nav, index) =>
          <li 
            key={nav.id} 
            className={`font-poppins font-normal cursor-pointer text[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white`}
            >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>)}
      </ul>
      {/* only for mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28-px] h-[28-px]
        object-contain"
        onClick={() => setToggle((prev) => !prev)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) =>
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>)}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar