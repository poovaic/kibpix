import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713"

//API CALL FOR POPULAR MOVIES

export async function callPopularMovies(){
    const response_PopularMovies = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    return response_PopularMovies;
}
//https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1

//API CALL FOR TOP RATED MOVIES
    export async function callTopRatedMovies(){

        const response_TopRatedMovies = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    

    return response_TopRatedMovies
    }

//API CALL FUNCTION FOR TRENDING MOVIES
export async function callTrendingMovies(){


    const response_TrendingMovies = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)


return response_TrendingMovies
}

//API CALL FUNCTION FOR TOP RATED TV
export async function callTopRatedTV(){


    const response_TopRatedTV = await axios.get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)


return response_TopRatedTV
}

//API CALL FUNCTION FOR TOP RATED TV
export async function callTrendingTV(){


    const response_TrendingTV = await axios.get(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`)


return response_TrendingTV
}
