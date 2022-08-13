import { useState } from 'react';
import axios from 'axios';
import MovieFilterList from './MovieFilterList';
import Movies from './Movies';
import MovieList from './MovieList';
import MoviesMiddle from './MoviesMiddle'
function MovieFilter(){
    

    const BASE_URL = "https://api.themoviedb.org/3"
    const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713"
    
    const [newMovie, setNewMovie] = useState([])
    const [oneMovie, setOneMovie] = useState('');
    console.log(oneMovie)
    
    // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

    async function searchMovie(){
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${oneMovie}`)
        // const allMovies = response.data
        setNewMovie(response.data.results)

    }

console.log(newMovie, 'newmovie')

   
    const getInput = (event) => setOneMovie(event.target.value)

  
    
    return(
       
<div>
    <MoviesMiddle
        getInput={getInput}
        searchMovie={event => searchMovie(event)}
       
        oneMovie={oneMovie}/>
      {/* <h1>Movies</h1>
      <input type="text" 
      value = {oneMovie}
      onChange = {getInput}
      />
<button onClick={(event) => searchMovie(event)}>Search Movie</button> */}
{newMovie.map((newMovieList) => {
    return <MovieFilterList newMovieList={newMovieList}/>
})}


{/* <MovieFilterList newMovie={newMovieList}/> */}


        </div>
    )
}

export default MovieFilter

