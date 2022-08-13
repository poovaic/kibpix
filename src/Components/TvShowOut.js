import React from 'react'
import {useNavigate} from "react-router-dom"

function TvShowOut(props) {
    const navigate = useNavigate();
   
   const  w500Image =  `https://image.tmdb.org/t/p/w500/${props.image}`

  return (

    <div className='SearchTile' key={props.id}>
        <img  className='SearchTile_img' src={w500Image} onClick={()=> navigate(`/TvShows/${props.id}`)} alt="Post banner" />
        <p  className='SearchTile_name'>{props.title}</p>
        </div>
       
  )
}

export default TvShowOut