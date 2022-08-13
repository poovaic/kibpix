import React from 'react'
import { useState,useEffect } from 'react'
import {callTrendingMovies,callTopRatedMovies,callTopRatedTV,callTrendingTV} from '../Services/ApiCall'
import TopRatedMovies from '../Components/TopRatedMovies'
import TrendingMovies from '../Components/TrendingMovies'
import TopRatedTV from '../Components/TopRatedTV'
import TrendingTV from '../Components/TrendingTV'

//Bezawit start
import Movies from './Movies'
//Bezawit end

function Home() {
   
    const[call1,setCall1]=useState([])
    const[call2,setCall2]=useState([])
    const[call3,setCall3]=useState([])
    const[call4,setCall4]=useState([])


//FUNCTION TO CALL APIS

   const onLoad=async()=>{

      let response1 = await callTrendingMovies()
      //console.log("callTrendingmovies-api-call",response1)
      response1 = response1.data.results
      setCall1(response1)
      console.log("setcall1-usestate-extracted-apicall",response1)

      let response2 = await callTopRatedMovies()
      //console.log("callTopRatedmovies-api-call",response2)
      response2 = response2.data.results
      setCall2(response2)
      console.log("setcall2-usestate-extracted-apicall",response2)

      let response3 = await callTrendingTV()
      //console.log("callTrendingTV-api-call",response3)
      response3 = response3.data.results
      setCall3(response3)
      console.log("setcall3-usestate-extracted-apicall",response3)

      let response4 = await callTopRatedTV()
      //console.log("callTopRatedTV-api-call",response4)
      response4 = response4.data.results
      setCall4(response4)
      console.log("setcall4-usestate-extracted-apicall",response4)

   }
   useEffect(()=>{
    onLoad()
   },[])


 

  return (
    <div className="home">
        <div className="home-container">

<Movies movies={call1} />

      
    <TrendingMovies call1={call1}/>
    <TopRatedMovies call2={call2}/>
    <TrendingTV call3={call3}/>
    <TopRatedTV call4={call4}/>
      </div>
    </div>
  )
}

export default Home
