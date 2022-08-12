import React from 'react'
import './trendingmovies.scss'
import { useNavigate } from 'react-router-dom';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const IMG_API_500 = "https://image.tmdb.org/t/p/w500";

function TrendingMovies({id,title,poster_path}) {

  const navigate=useNavigate()

  return (
    <div className="trending-movies-component">
    <img onClick={()=> navigate(`/Movies/${id}`)}  src={IMG_API_500 + poster_path} alt={title}/>

  <div className="movie-info">
  <h2>{title}</h2>

  </div>

</div>
  )
}

export default TrendingMovies
