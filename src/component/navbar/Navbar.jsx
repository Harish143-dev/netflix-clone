import React, { useEffect, useRef } from 'react'
import './Nav.css'
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profle_icon from "../../assets/profile_img.png"
import caret from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if (window.scrollY >= 80) {
        navRef.current.classList.add('backdrop-brightness-10') 
      }
      else{
        navRef.current.classList.remove('backdrop-brightness-10')
      }
    })
  },[])

  return (
    <div ref={navRef} className='w-full flex justify-between fixed navbar'>
      <div className='flex items-center gap-12.5'>
        <img src={logo} alt="" className='w-22' />
        <ul className='hidden lg:flex list-none gap-5'>
          <li className='cursor-pointer font-semibold'>Home</li>
          <li className='cursor-pointer font-semibold'>Tv Show</li>
          <li className='cursor-pointer font-semibold'>Movies</li>
          <li className='cursor-pointer font-semibold'>New & Popular</li>
          <li className='cursor-pointer font-semibold'>My List</li>
          <li className='cursor-pointer font-semibold'>Browse by Language</li>
        </ul>
      </div>
      <div className='flex items-center gap-5'>
        <img src={search_icon} alt="" className='w-5 cursor-pointer' />
        <p className='font-semibold'>Children</p>
        <img src={bell_icon} alt="" className='w-5 cursor-pointer' />
        <div className='flex items-center gap-2 cursor-pointer relative hover:*:block'>
          <img src={profle_icon} alt="" className='rounded-sm w-8 ' />
          <img src={caret} alt="" />
          <div className='absolute top-full right-0 w-max bg-gray-950 rounded-sm px-5.5 py-4.5 hidden transition-all'>
            <p className='text-sm cursor-pointer underline'  onClick={logout}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar