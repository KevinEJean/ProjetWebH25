import React, { useEffect, useState } from 'react';

//  a  mettre dans un hook personalisé et mettre les url dans un arrays et gérer l'affichage des séries 

// const API_KEY = "a34708ad"; 
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// nouvelle api TMDB
// url movie
const API_KEY = "bbe34269651625cd81a39afd38610700"; 
const API_URL_A_l_AFFICHE = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=`;
const API_URL_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`;
const API_URL_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=`;
const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=`;
const API_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=`;

// url tv
const API_URL_TV_POPULAR = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=`;
const API_URL_TV_TOP_RATED = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&page=`;
const API_URL_TV_TRENDING = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&page=`;


export default function useHome() {
     //   const moviesRecent = movies.filter((movie) => movie.Year >= 2024)
        const [moviesRecent, setMoviesMoviesRecent] = useState([])
        const [moviesTopRated, setMoviesTopRated] = useState([])
        const [moviesTrending, setMoviesTrending] = useState([])
        const [moviesPopular, setMoviesPopular] = useState([])
        const [moviesUpcoming, setMoviesUpcoming] = useState([])
    
        const [seriePopular, setSeriePopular] = useState([])
        const [serieTopRated, setSerieTopRated] = useState([])
        const [serieTrending, setSerieTrending] = useState([])
    
        const searchMovieOrTvBy = async (url, setter) => {
            const response = await fetch(`${url}${1}`);
            const data = await response.json();
            setter(data.results || []);
            // console.log(data)
        };
    
        useEffect(() => {
            searchMovieOrTvBy(API_URL_A_l_AFFICHE, setMoviesMoviesRecent)
            searchMovieOrTvBy(API_URL_TRENDING, setMoviesTrending)
            searchMovieOrTvBy(API_URL_TOP_RATED, setMoviesTopRated)
            searchMovieOrTvBy(API_URL_POPULAR,setMoviesPopular)
            searchMovieOrTvBy(API_URL_UPCOMING, setMoviesUpcoming)
    
            // serie
            searchMovieOrTvBy(API_URL_TV_POPULAR, setSeriePopular)
            searchMovieOrTvBy(API_URL_TV_TOP_RATED, setSerieTopRated)
            searchMovieOrTvBy(API_URL_TV_TRENDING, setSerieTrending)
            // searchTopRatedTv()
        }, []);
    
    return {
        moviesRecent,
        moviesTopRated,
        moviesTrending,
        moviesPopular,
        moviesUpcoming,
        seriePopular,
        serieTopRated,
        serieTrending
        
    };
}




const URL_API = [
    // url movie
    {API_URL_A_l_AFFICHE: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=`},
    {API_URL_TOP_RATED: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`},
    {API_URL_TRENDING: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=`},
    {API_URL_POPULAR: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=`},
    {API_URL_UPCOMING: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=`},
    // url tv
    {API_URL_TV_POPULAR: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=`},
    {API_URL_TV_TOP_RATED: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&page=`},
    {API_URL_TV_TRENDING: `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&page=`}
]