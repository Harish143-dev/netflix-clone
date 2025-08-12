import React, { useEffect, useState } from 'react'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTU4Y2QzNWJhZTJiNzgyYjUxMTAxNDlhNDM5YjQ5ZSIsIm5iZiI6MTc0NzMwNTM5NC42LCJzdWIiOiI2ODI1YzNiMjI4NDU0NmUwZTFhMTczYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4rC9ZjNUwTwQYesG68mPmaBs4C4o0FwvdUCa6wRtWKE'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [])

  return (

    <div className='flex h-screen flex-col items-center justify-center'>

      <img src={back_arrow_icon} alt="" className='w-12 absolute top-5 left-5 cursor-pointer' onClick={()=>navigate(-2)} />
      <iframe className='rounded-sm' width='92%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' allowFullScreen></iframe>
      <div className='flex justify-between items-centers min-w-11/12'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}

export default Player