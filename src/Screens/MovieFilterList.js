import React from 'react'
import {useNavigate} from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
function MovieFilterList(props) {
    const navigate = useNavigate();
   const  w500Image =  `https://image.tmdb.org/t/p/w500/${props.image}`
  return (
    <div className='SearchTile containerimg' key={props.id}>
        <img  className='SearchTile_img' src={w500Image}  alt="Post banner" />
        
        <YouTubeIcon className="btn" onClick={()=> navigate(`/Movies/${props.id}`)}/>
        <p  className='SearchTile_name'>{props.title}</p>
        </div>
  )
}
export default MovieFilterList