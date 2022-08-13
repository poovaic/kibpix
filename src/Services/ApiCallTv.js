import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "b990552aaa8b2d4d2ccfc84e824bd713"


    export async function popularTvShows(){

        const response_popularTvShows = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`)
    //https://api.themoviedb.org/3/tv/popular?api_key=b990552aaa8b2d4d2ccfc84e824bd713&language=en-US&page=1
//https://api.themoviedb.org/3/search/tv?api_key=b990552aaa8b2d4d2ccfc84e824bd713&language=en-US&page=1&query=halo
    return response_popularTvShows
    }

    
    export async function searchTvShows(search){

        const response_searchTvShows = await axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${search}`)
   
    return response_searchTvShows
    }

