import  { useState , useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"

import React from 'react'

function TvShowDetails() {
   
    const navigate = useNavigate();
    const {tvshow_id} = useParams();
      console.log("showid",tvshow_id)

      const[idData , setIdData ] = useState('')
      const[idVideo , setIdVideo ] = useState('')

      const BASE_URL = "https://api.themoviedb.org/3"
        const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713"
        const VIDEO_URL = "https://www.youtube.com/embed?v="
        //https://www.youtube.com/watch?v=
        //https://youtu.be/

      async function getCredits(id ){
  
        
          //credits  https://api.themoviedb.org/3/tv/66732/credits?api_key=b990552aaa8b2d4d2ccfc84e824bd713&language=en-US
          //videos   https://api.themoviedb.org/3/tv/66732/videos?api_key=b990552aaa8b2d4d2ccfc84e824bd713&language=en-US


             const response = await  axios.get(`${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en-US`);
          
          
            console.log("id api for credits",response);
            let output= response.data;
            console.log("2nd api call credits", output)
                    
          
                   setIdData(output);
                   
           }


           async function getVideo(id ){
  
               const responsevideo = await  axios.get(`${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=en-US`);
            //https://api.themoviedb.org/3/tv/66732/videos?api_key=b990552aaa8b2d4d2ccfc84e824bd713&language=en-US
            
              console.log("id api for videos",responsevideo);
              let output2= responsevideo.data.results;
              console.log("2nd api call videos", output2)
                      
            
                     setIdVideo(output2);
                     
             }
  

     
     
     
//       useEffect(()=>{
  
//      getCredits(tvshow_id )
//      getVideo(tvshow_id)
  

  
//   },[tvshow_id])

     
  console.log("idvidoe.name", idVideo[0].name )
   console.log("idvidoe", VIDEO_URL+idVideo[0].key )
  return (
    <div>TvShowDetails

         <h1>{idVideo[0].name}</h1>
   
        

    <iframe width="420" height="345" src={VIDEO_URL + idVideo[0].key }> 
      </iframe> 

    </div>
  )
}

export default TvShowDetails


// function Recipe() {
//     //console.log("props in post", props)
  
  
  
//     const navigate = useNavigate();
  
  
//       const {recipe_id} = useParams();
//       console.log("receipe",recipe_id)
//   //extracting id from url 
//   const[idData , setIdData ] = useState('')
//   const[button,setButton]= useState("")
  
//   const [summary, setSummary] = useState('false')
  
//            async function getInstructions(id ){
  
//     const BASE_URL = "https://api.spoonacular.com"
//     const API_KEY = '58888b98c21c4a9db6db18650100b025'
  
//     try{
//     const response = await  axios.get(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);
  
  
//     console.log("id api ",response);
//     let output= response.data;
//     console.log("2nd api call data", output)
            
  
//            setIdData(output);
           
//     }
//     catch(error){
//             return (error)
//     }
  
//   }
  
//   const instructions = () => {
//     setSummary("true");
//     setButton("instructions");
//   }
//   const ingredients = () => {
//     setSummary("true");
//     setButton("ingredients");
//   }
  
  
  
//   useEffect(()=>{
  
//     getInstructions(recipe_id )
  
//     // setPosts(props.postsData);
  
//   },[recipe_id])
  
  
//       return(
          
//           <div className="wrapper">
//                 <div>
//                  <h2>{idData.title}</h2> 
//                  <img src={idData.image} alt="food pic" />
                
//                 </div>
//             <div className='info'>
//                   <button className={`insButton , ${button==="instructions"? "active": ""}`}   onClick={instructions}>Instructions</button>
//                   <button className={`insButton , ${button==="ingredients"? "active": ""} `}  onClick={ingredients}>Ingredients</button>
  
//                   {button === "instructions" && (   
//                     <h3 dangerouslySetInnerHTML={{ __html: idData.instructions }}></h3>
//                 )}
  
                      
//                  {button === "ingredients" && (
//                   <ul>
//                     {idData.extendedIngredients && idData.extendedIngredients.map((ingredient) => (
//                      <li key={ingredient.id}>{ingredient.original}</li> 
//                    ))}
//                   </ul>
//                 )}
                 
//                 {summary === "false" && (
//                  <div  className='summary'>
//                  <p dangerouslySetInnerHTML={{ __html: idData.summary }}></p>
//                  </div>
  
                 
         
//       )}   
//                  <div  className='returnTag '>
//                   <h3 >Time to make : {idData.readyInMinutes} minutes</h3>
//                  <a href={idData.sourceUrl}>source website</a> <br  />
//                  <button  onClick={() => navigate(-1)}>Previous Page </button>
//                  </div>
//                  </div>
//           </div>
//       )
//   }
  
//   export default Recipe
  