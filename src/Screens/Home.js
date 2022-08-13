import React from 'react'
import { useState,useEffect } from 'react'
import {callTrendingMovies,callTopRatedMovies,callTopRatedTV,callTrendingTV,callMarvelComics} from '../Services/ApiCall'
import TopRatedMovies from '../Components/TopRatedMovies'
import TrendingMovies from '../Components/TrendingMovies'
import TopRatedTV from '../Components/TopRatedTV'
import TrendingTV from '../Components/TrendingTV'
import MarvelComics from '../Components/MarvelComics'
import './home.scss'


function Home() {
   
    const[call1,setCall1]=useState([])
    const[call2,setCall2]=useState([])
    const[call3,setCall3]=useState([])
    const[call4,setCall4]=useState([])
    const[call5,setCall5]=useState([])



//FUNCTION TO CALL APIS

   const onLoad=async()=>{

      let response1 = await callTrendingMovies()
      //console.log("callTrendingmovies-api-call",response1)
      response1 = response1.data.results
      setCall1(response1)
      console.log("setcall1-trendingmovies-extracted-apicall",response1)

      let response2 = await callTopRatedMovies()
      //console.log("callTopRatedmovies-api-call",response2)
      response2 = response2.data.results
      setCall2(response2)
      console.log("setcall2-topratedmovies-extracted-apicall",response2)

      let response3 = await callTrendingTV()
      //console.log("callTrendingTV-api-call",response3)
      response3 = response3.data.results
      setCall3(response3)
      console.log("setcall3-trendingtv-extracted-apicall",response3)

      let response4 = await callTopRatedTV()
      //console.log("callTopRatedTV-api-call",response4)
      response4 = response4.data.results
      setCall4(response4)
      console.log("setcall4-topratedtv-extracted-apicall",response4)

      let response5 = await callMarvelComics()
      //console.log("callTopRatedTV-api-call",response4)
      let result = response5.data.data.results
      console.log('results',result)
      setCall5(result)
      console.log("setcall5-marvelmovies-extracted-apicall",response5)
      console.log('results',result)


   }
   useEffect(()=>{
    onLoad()
   },[])


 

  return (
    <div className="home">
        
        <div className="home-container">
           
            
            <div className="title-trending-movies">            
            <h1>Trending Movies</h1>
            </div>


            <div className="trending-movies">
                {call1.length>0 && 
                call1.map((movie)=> 
            <TrendingMovies key={movie.id} {...movie}/>
            )}
            </div>
            
            <div className="title-toprated-movies">            <h1>Top Rated Movies</h1>
        </div>
            <div className = "toprated-movies">

            {/* <TopRatedMovies call2={call2}/> */}
               { call2.length> 0 && 
               call2.map((movie)=>
               <TopRatedMovies key={movie.id} {...movie}/>
               )
               }
            
            </div>
            <div className="title-trending-tv">            <h1>Trending TV</h1>
            </div>
            <div className = "trending-tv">
                {call3.length>0 && 
                call3.map((tv)=>
            <TrendingTV key={tv.id} {...tv}/>
            )}
            </div>
            
            <div className="title-toprated-tv">            <h1>Top Rated TV</h1>
            </div>
            
            <div className = "toprated-tv">
                {call4.map((tv)=>
            <TopRatedTV key={tv.id} {...tv}/>
                )
                }
            </div>
            
            <div className="title-marvelcomics">            <h1>Famous Marvel Comics</h1>
            </div>

            <div className="marvelcomics" >
                {call5.length>0 && 
                call5.map((comic)=>
                <MarvelComics key={comic.id} 
                thumbnail={`${comic.thumbnail.path}/portrait-fantastic.${comic.thumbnail.extension}`} {...comic} />
                )}
            </div>

        </div>
    
    </div>
  )
}

export default Home