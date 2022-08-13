import React from 'react';
import { useState } from 'react';
import MovieFilter from './MovieFilter';

// const [state, setState] = useState('false')

// `https://image.tmdb.org/t/p/original/${imgPath}`,
function MovieList(props) {
    const IMG_API_500 = `https://image.tmdb.org/t/p/w500/`
    const imgUrl = `https://image.tmdb.org/t/p/original/`
   const { movieData } = props
//    const image = movieData.poster_path
    // console.log(poster_path,'test')
  return (
    <div>
{/* 
  <h1>Movies</h1>
      <input type="text" 
      value = {oneMovie}
      onChange = {getInput}
      />
<button onClick={(event) => searchMovie(event)}>Search Movie</button>  */}




        {movieData && 
        <div>
              
   <img src={IMG_API_500 + movieData.poster_path} alt="poster"/>
   <h3>{movieData.original_title}</h3>
            </div>}
      

     
       
    </div>
  )
}

export default MovieList