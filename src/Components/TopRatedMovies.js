import React from 'react'
import './topratedmovies.scss'
import { useNavigate } from 'react-router-dom';

//import axios from 'axios';
//import TRMovieCard from './TRMovieCard';
//import {useState,useEffect} from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const IMG_API_500 = "https://image.tmdb.org/t/p/w500";

const TopRatedMovies=({id,title,poster_path})=>{
  const navigate=useNavigate()

  console.log('props-topratedmovies',title)

  return (
    <div className="toprated-movies-component">
        <img onClick={()=> navigate(`/Movies/${id}`)}  src={IMG_API_500 + poster_path} alt={title}/>

      <div className="movie-info">
      <h2>{title}</h2>
      </div>
    
    </div>
  )
}

export default TopRatedMovies
