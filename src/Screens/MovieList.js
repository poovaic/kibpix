import React from 'react';
import { useState } from 'react';
import MovieFilter from './MovieFilter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useNavigate} from "react-router-dom";

function MovieList(props) {
  const navigate = useNavigate();
    const IMG_API_500 = `https://image.tmdb.org/t/p/w500/`
    const imgUrl = `https://image.tmdb.org/t/p/original/`
   const { movieData } = props

  return (
    <div>


        {movieData && 
        <div className='populartv containerimg'>
               
   <img src={IMG_API_500 + movieData.poster_path} alt="poster" className="populartvimg containerimg"  />
    <YouTubeIcon className="btn" onClick={()=> navigate(`/Movies/${movieData.id}`)}/>
   <h3 className='populartvh3'>{movieData.original_title}</h3>
            </div>}   
         
    </div>
  )
}

export default MovieList