import React from 'react'
import {useState, useEffect} from "react"
import {popularTvShows,searchTvShows} from "../Services/ApiCallTv"
import OutputMap from '../Components/OutputMap';
import Error from './Error';
import Popular from "../Components/Popular";


function TVShows() {
  //const [value , setValue] = useState('');
  const [click,setClick] = useState([]);
  const [search,setSearch] = useState('');
  const[error,setError] =useState('')
  const[popular,setPopular]= useState([]);
  
  useEffect(()=>{
    getPopular();
    //console.log('i am loaded')

   },[]);
  
  
  
  
  
  const getPopular =async() =>{
      
   
     let response1 = await popularTvShows();
    console.log("popularshows response",response1)
    const  data= response1.data.results;
    console.log("populardata", data)
         setPopular(data)     

  }


  const buttonClick =async() =>{
      
    if(search!==""){
    let response = await searchTvShows(search);
    console.log("api response",response)

    if( response.data.results.length!==0){
      let output=response.data.results;
      console.log('output',output)
       
       setSearch('')
       setClick(output)
       setError("")
    }
    else{
      setError(`There are no results for ${search} `)
    }
  }
    else{
        setError("Type the name of the Tv show you want in the box")
    }
 console.log("click", click);
}
  
  
  
  
  return (
    <div>
        <h1>TVshows</h1>
        <input  type="text" placeholder="Search Your Tvshow...."  onChange={(e)=>setSearch(e.target.value)} />
     
     <button    onClick={buttonClick}  > Search </button>
     <div>
    <OutputMap mapping={click}/>
    <Popular   map={popular}/>
    </div>
     <div>
      { error!=="" && <Error error={error}/>}

    </div>
    </div>
  )
}

export default TVShows
