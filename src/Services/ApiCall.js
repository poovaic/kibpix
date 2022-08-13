import MD5 from 'crypto-js/md5';
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713"

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
const getHash = (ts,privatekey,publickey)=>{
    return MD5(ts+privatekey+publickey).toString()
}
export async function callMarvelComics(){

    let ts= Date.now().toString()
    let apikey='d088501158e1338cc7d39f5603a59015';
    let privatekey='47dc3be3e1adab516b872c2bef23b5d6e6233f23';
    let hash = getHash(ts,privatekey,apikey)


    const response_MarvelComics = await axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`)

    console.log('responsemarvelcomics',response_MarvelComics)
return response_MarvelComics
}
