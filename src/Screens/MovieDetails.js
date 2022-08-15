import  { useState , useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import React from 'react'
import './tvshowdetails.scss';



const picConfig = {
  w300Image: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

function MovieDetails() {

      const navigate = useNavigate();
      const {id} = useParams();
      const[movieTrailer , setMovieTrailer]= useState('');
      const[movieCast , setMovieCast ] = useState('')
      const[description,setDescription ]=useState('')

       
       const VIDEO_URL = "https://www.youtube.com/watch?v="  ;
       const BASE_URL = "https://api.themoviedb.org/3"
       const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713";

 
       async function getVideos(id ){
        const videoresponse = await  axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
      
        console.log(" trailervideo",videoresponse);
        let outputvideo= videoresponse.data.results;
        console.log("trailer", outputvideo)
        console.log("trailerkey", outputvideo[0].key)
            setMovieTrailer(outputvideo);      
             
       }




       async function getCredits(id ){
          const castresponse = await  axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        
          console.log(" credits",castresponse);
          let output= castresponse.data;
          console.log("cast", output)
              setMovieCast(output);      
               
         }

         async function getDetails(id ){
          const detailsresponse = await  axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
          console.log(" credits",detailsresponse);
          let detail= detailsresponse.data;
          console.log("cast", detail)
         
              setDescription(detail);      
               
         }
         console.log("setcast",movieCast)
           console.log("description",description)
         
           useEffect(()=>{
               getVideos(id)
               getDetails(id )
               getCredits(id )
                      },[id])

        console.log( "overview",description.overview)
        console.log( "posterpath",`${picConfig.originalImage(description.poster_path )}`)
     
         return(
          
<div>
             
             <div className='banner' style={{backgroundImage:`url(${picConfig.originalImage(description.backdrop_path || description.poster_path)})`}}></div>
            <div className='mb-3 movie-content container'>
               <div className='movie-content__poster'>
                {/* <img className='movie-content__poster__img' src={`${picConfig.originalImage(description.poster_path || description.backdrop_path)}`}  alt="pic"/> */}
                <div className='movie-content__poster__img' style={{backgroundImage:`url(${picConfig.originalImage(description.poster_path || description.backdrop_path)})`}} ></div>
    
                 <div className='movie-content__info'>
                  <h1 className='title'>{description.original_title}</h1>
                  <div className="genres">
                       {description.genres && description.genres.map((item) => (
                         <span className='genres__item'  key={item.name}>{item.name}</span>
                      ))}
                  </div>
                      <p className='overview'>{description.overview}</p>
                      <div className='cast'>
                        <div className='section__header'>
                          <h2>Casts</h2>
                        </div>
                        <div className='casts'>
                        {movieCast.cast && movieCast.cast.slice(0, 5).map((item) => {
                          return(
                            <div className="casts__item">                                        
                            <div className="casts__item__img"  style={{backgroundImage:`url(${picConfig.w500Image(item.profile_path)})`}} key={item.id} ></div>
                              {/* <img className="casts_item_img" src={`${picConfig.w500Image(item.profile_path )}`}  alt="pic"/> */}
                               <p className="casts__item__name" key={item.name} >{item.name}</p>
                              </div>
                               )
                           })}
                        
                      </div> 
                       </div>
                 </div> 
               </div>
               <div className='container'>
                <div className='section mb-3'>
                 {movieTrailer && movieTrailer.slice(0, 1).map((item) => {
                  return <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                height="350"
                width="450"
                title="video"
            ></iframe>}) }
                </div>
               </div>
            </div>
              <button className="returnTvShow" onClick={() => navigate(-1)}>Return to Movies</button>
          </div>
         )
}

export default MovieDetails


