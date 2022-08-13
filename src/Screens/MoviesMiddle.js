import React from 'react'

function MoviesMiddle(props) {
  return (
    <div>
    <h1>Movies</h1>
     <input type="text" 
     value = {props.oneMovie}
     onChange = {props.getInput}
     />
<button onClick={(event) => {props.searchMovie(event)
                           props.clearMovieList(event)}}>Search Movie</button> </div>
  )
}

export default MoviesMiddle