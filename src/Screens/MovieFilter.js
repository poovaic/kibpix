import React from 'react'
import MovieFilterList from './MovieFilterList'

function MovieFilter(props) {

const { data} = props            

  return (
    <div className='SearchOutput'>
                 { data.map((show)=>{
                    

                    return <MovieFilterList  key={show.name} id={show.id} title={show.original_title} image={show.poster_path} />
                    
                   
                    })
                }
    </div>
  )
}

export default MovieFilter