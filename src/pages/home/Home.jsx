import React from 'react'
import './Home.css'
import Navbar from '../../component/navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TittleCards from "../../component/title_cards/TittleCards"
import Footer from '../../component/footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='relative ml-5'>
                <img src={hero_banner} alt="" className='w-full mask-l-to-transparent' />
                <div className=' absolute pl-3 w-full bottom-0 max-md:*:*:*:hidden'>
                    <img src={hero_title} alt="" className='max-md:w-60 max-w-md mb-5' />
                    <p className='md:w-150 text-md mb-5'>Discovering is ties to a secret ancient order, a young man living in a modern Istanbul embark on a quest to save the city from a immortal enemy.</p>
                    <div className='flex gap-2 mb-15'>
                        <button className='border-0 outline-0 md:py-1 md:px-3 max-sm:px-2 max-sm:py-1 text-black inline-flex items-center gap-2.5 font-semibold md:text-lg rounded-sm cursor-pointer bg-white hover:bg-gray-400 transition-all' > <img src={play_icon} alt="" className='w-6' /> Play</button>
                        <button className='border-0 outline-0 md:py-1 md:px-3 max-sm:px-2 max-sm:py-1 inline-flex items-center gap-2.5 font-semibold md:text-lg rounded-sm cursor-pointer bg-blend-lighten bg-gray-600 text-white hover:bg-gray-500 transition-all' > <img src={info_icon} alt="" className='w-6' /> More info</button>
                    </div>
                    <div>
                        <TittleCards />
                    </div>
                </div>
            </div>
            <div className='p-8.5'>
                <TittleCards title='Blockbuster Movies' category='top_rated' />
                <TittleCards title='Only on Netflix' category='popular' />
                <TittleCards title='Upcoming' category='upcoming' />
                <TittleCards title='Top Pics for you' category='now_playing' />
            </div>
            <Footer />
        </div>
    )
}

export default Home