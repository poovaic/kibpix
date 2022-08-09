import React from 'react'
import {useNavigate} from "react-router-dom"

function TvShowOut(props) {
    const navigate = useNavigate();
   //  const originalImage = `https://image.tmdb.org/t/p/original/${imgPath}`
   const  w500Image =  `https://image.tmdb.org/t/p/w500/${props.image}`

  return (
 

              
 <div key={props.id}>

{/* <img className='recipeTile_img' src={props.image } onClick={()=> navigate(`/CheckCook/${props.id}`)} alt="Post banner" />
        <p className='recipeTile_name'>{props.title}</p> */}
        
        <img  src={w500Image} onClick={()=> navigate(`/TvShows/${props.id}`)} alt="Post banner" />
        <p >{props.title}</p>
     
        </div> 
   
  )
}

export default TvShowOut