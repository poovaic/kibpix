import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from './MovieList'
import {callPopularMovies} from '../Services/ApiCall';
import MovieFilter from './MovieFilter';
import MoviesMiddle from './MoviesMiddle';
import MovieDescription from './MovieDescription'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function Movies() {

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

 
const clearMovieList = () => setPopularMovie('') ;
// setPopularMovie('')

//https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1


// const url = `${BASE_URL}/search/movie?api_key=API_KEY&query=Jack+Reacher`
  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
  // https://api.themoviedb.org/3/movie/343611?api_key={api_key}

  // https://image.tmdb.org/t/p/w500/${props.movies.poster_path}

// const [oneMovie, setOneMovie] = useState('');
// console.log(oneMovie)

// const getInput = (event) => setOneMovie(event.target.value)

  return (
    <div>
<Router>
  <Route exact path="/">
  <MovieFilter data={popularMovie}/>
  </Route>
  <Route path="/movies/:id">
    <MovieDescription data={popularMovie}/>
    </Route>
    </Router>
     {/* <MovieFilter data = {popularMovie}/> */}


{/* 
     <h1>Movies</h1>
      <input type="text" 
      value = {props.oneMovie}
      onChange = {props.getInput}
      />
<button onClick={(event) => {props.searchMovie(event)
                            clearMovieList()}}>Search Movie</button>  */}

<MoviesMiddle clearMovieList={event => clearMovieList(event)}/>

      
      {/* <input type="text" 
      value = {oneMovie}
      onChange = {getInput}
      />

      <button>Search</button> */}

{popularMovie.map((singleMovie, index) => {
  return <MovieList movieData={singleMovie} key={index} />
  
})}

 {/* <MovieFilter data = {popularMovie}/> */}
     
    </div>
  )
}



export default Movies
