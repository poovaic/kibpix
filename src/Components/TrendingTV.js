import React from 'react'
import './trendingtv.scss'
import { useNavigate } from 'react-router-dom';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function TrendingTV({id,name,poster_path}) {

  const navigate=useNavigate()

  return (
    <div className="toprated-tv-component">
      
      <img onClick={()=> navigate(`/TVShows/${id}`)} src={IMG_API + poster_path} alt={name}/>

      <div className="tv-info">
      <h2>{name}</h2>

      </div>
      </div>
  )
}

export default TrendingTV
