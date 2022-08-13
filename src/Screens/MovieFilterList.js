import React from 'react';

function MovieFilterList(props) {
    const IMG_API_500 = `https://image.tmdb.org/t/p/w500/`
    const {newMovieList} = props;
  return (
    <div>




<img src={IMG_API_500 + newMovieList.poster_path} alt="poster"/>
   <h3>{newMovieList.original_title}</h3>

       

    </div>
  )
}

export default MovieFilterList