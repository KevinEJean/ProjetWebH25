import React, { useEffect, useState } from 'react';
import useUtils from '../utils/useUtils';
////// Api de OMDB pas obliger /////////////////////////
// const API_KEY_OMDB = "a34708ad"; 
// const API_URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

////// Api de TMDB /////////////////////////z
const API_KEY_TMDB = "bbe34269651625cd81a39afd38610700"; 
const API_URL_TMDB_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY_TMDB}&page=`;
const API_URL_TMDB = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_TMDB}&query=`;

const imageFiltre = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>

function useSearchMovie() {
    const [inputCritere, setInputCritere] = useState('');
    const [critere, setCritere] = useState('');
    const [movies, setMovies] = useState([]);
    const [moviesTrending, setMoviesTrending] = useState([]);
    const [genreSelect, setGenreSelect] = useState("movie")



    // const navigate = useNavigate();
    const {handleDetail} = useUtils();


    const handlecritere = () => {
        console.log("Critère: ", inputCritere);
        setCritere(inputCritere);
        setInputCritere("");
    };


    const searchMovies = async () => {
        const response = await fetch(`${`https://api.themoviedb.org/3/search/${genreSelect}?api_key=${API_KEY_TMDB}&query=`}${critere}`);
        const data = await response.json();
        setMovies(data.results || []);   
    };

    const searchTrendingMovie = async () => {
        const response = await fetch(`${API_URL_TMDB_TRENDING}${1}`);
        const data = await response.json();
        setMoviesTrending(data.results || []);
    };
    

    useEffect(() => {
        searchTrendingMovie()
        if (critere) {
            searchMovies();
        }
    }, [genreSelect,critere]);

    console.log("Movie Trending: ", moviesTrending)
    console.log("Movie result: ", movies)
    return {
        inputCritere,
        critere,
        movies,
        genreSelect, 
        moviesTrending,
        setGenreSelect,
        setMovies,
        setInputCritere,
        setMoviesTrending,
        handlecritere,
        handleDetail
    };
}

export default useSearchMovie;