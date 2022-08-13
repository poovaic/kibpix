import React from 'react'
import {useNavigate} from 'react-router-dom';
import './marvelcomics.scss'
const IMG = 'portrait-fantastic'

function MarvelComics({id,thumbnail,title}) {
  
console.log('path',thumbnail.path)
  const navigate = useNavigate()
  return (
    <div className="marvelcomics-component">
      
      <img loading="lazy" onClick={()=> navigate(`/TVShows/${id}`)} src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}  alt={title}/>
      
      <div className="comics-info">
      <h2>{title}</h2>

      </div>
      </div>
  )
}

export default MarvelComics
