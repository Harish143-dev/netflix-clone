import React, { useEffect, useRef, useState } from 'react'
import cards_data from "../../assets/cards/Cards_data"
import '../../../src/index.css'
import { Link } from 'react-router-dom'

const TittleCards = ({ title, category }) => {
    const [apiData, setApiData] = useState([])
    const cardsRef = useRef()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTU4Y2QzNWJhZTJiNzgyYjUxMTAxNDlhNDM5YjQ5ZSIsIm5iZiI6MTc0NzMwNTM5NC42LCJzdWIiOiI2ODI1YzNiMjI4NDU0NmUwZTFhMTczYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4rC9ZjNUwTwQYesG68mPmaBs4C4o0FwvdUCa6wRtWKE'
        }
    };
    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY
    }
    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));


        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className='mt-5 mb-7.5'>
            <h1 className='mb-2 font-bold text-2xl'>{title ? title : "Popular on Netflix"}</h1>
            <div className='flex gap-2.5 overflow-x-scroll no-scrollbar' ref={cardsRef}>
                {
                    apiData.map((card, index) => (
                        <Link to={`/player/${card.id}`} className='relative' key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" className='max-w-60 rounded-sm cursor-pointer' />
                            <p className=' absolute bottom-2.5 right-2.5'>{card.original_title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TittleCards