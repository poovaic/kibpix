import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from './MovieList'
import {callPopularMovies} from '../Services/ApiCall';
import {searchMovies} from '../Services/ApiCall'
import MovieFilter from './MovieFilter';
import MoviesMiddle from './MoviesMiddle';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './moviespopular.scss';
import Error from './Error';
import TvRoundedIcon from '@mui/icons-material/TvRounded';

function Movies() {
    const [click,setClick] = useState([]);
    const [search,setSearch] = useState('');
    const[error,setError] =useState('')
  const [popularMovie, setPopularMovie] = useState([])

  const BASE_URL = "https://api.themoviedb.org/3"
  const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713"


  
  const pageLoad=async()=>{

    let movieAll = await callPopularMovies()
    movieAll = movieAll.data.results
    setPopularMovie(movieAll)
    console.log("setpopluar movie",movieAll)
  }



  useEffect(()=>{
    pageLoad()
  },[])
   
  const buttonClick =async() =>{
      
    if(search!==""){
    let response = await searchMovies(search);
    console.log("api response",response.data.results)
    setPopularMovie('');
     if( response.data.results.length!==0){
      let output=response.data.results;
      console.log('output',output)
       
       setSearch('')
       setClick(output)
       setError("")
    }
      else{
      setError(`There are no results for ${search} `)
    }
  }
    else{
      
        setError("Type the name of the Tv show you want in the box")
    }
 
}
console.log("click", click);
  
 
console.log('popular',popularMovie)

  return (
    <div className='tvShows'>

          <h1>< TvRoundedIcon />  Movies  < TvRoundedIcon />
         </h1>
        <input  type="text" placeholder="Search Your Movies...."  onChange={(e)=>setSearch(e.target.value)} />
     
     <button    onClick={buttonClick}  > Search </button>
     <div>
   
   
     <MovieFilter data = {click}/> 
      
     
<div className="popular">
  
{popularMovie && popularMovie.map((singleMovie, index) => {
  return <div className="popular"><MovieList movieData={singleMovie} key={index} /></div>
  
})}
</div>

 </div>
     <div>
      { error!=="" && <Error error={error}/>}

    </div>

    </div>
  )
}



export default Movies