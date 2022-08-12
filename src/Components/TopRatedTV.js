import React from 'react'
import './topratedtv.scss'
import { useNavigate } from 'react-router-dom';


//const IMG_API = "https://image.tmdb.org/t/p/w1280";
const IMG_API_500 = "https://image.tmdb.org/t/p/w500";



function TopRatedTV({id,name,poster_path}) {
  console.log('props-topratedtv-key',id)
  const navigate=useNavigate()

  return (
    <div className="toprated-tv-component">
      
      <img onClick={()=> navigate(`/TVShows/${id}`)} src={IMG_API_500 + poster_path} alt={name}/>

      <div className="tv-info">
      <h2>{name}</h2>

      </div>

    </div>
  )
}

export default TopRatedTV
