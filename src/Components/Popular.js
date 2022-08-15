import React from 'react'
import {useNavigate} from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';

function Popular(props) {
   
    const {map} = props;
    console.log("popularmap", map)
   
    const  w500Image =  "https://image.tmdb.org/t/p/w500/";

    const navigate = useNavigate();


  return (
    <div className="popular">
    
        {map && map.map((item)=>{
            return <div  className='populartv containerimg' key={item.id} >
              
                <img src={w500Image + item.poster_path} alt="Post banner" />
                {/* onClick={()=> navigate(`/TvShows/${item.id}`)} */}
                <YouTubeIcon className="btn" onClick={()=> navigate(`/TvShows/${item.id}`)}/>
                <h3>{item.name}</h3>
                </div>
    
       })}
    </div>
  )
}

export default Popular