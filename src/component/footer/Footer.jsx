import React from 'react'
import youtube_icon from '../..//assets/youtube_icon.png'
import twitter_icon from '../..//assets/twitter_icon.png'
import facebook_icon from '../..//assets/facebook_icon.png'
import instagram_icon from '../..//assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='flex items-center justify-center flex-col py-1'>
      <div className='flex gap-5 my-10 mx-0'>
        <img src={youtube_icon} alt="" className='w-7.5 cursor-pointer' />
        <img src={twitter_icon} alt="" className='w-7.5 cursor-pointer' />
        <img src={facebook_icon} alt="" className='w-7.5 cursor-pointer' />
        <img src={instagram_icon} alt="" className='w-7.5 cursor-pointer' />
      </div>
      <ul className='grid md:grid-cols-4 sm:grid-cols-2 gap-3.5 mb-7.5 list-none'>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relatios</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Noticse</li>
        <li>Cookies Preferance</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='text-sm text-gray-500'>1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer