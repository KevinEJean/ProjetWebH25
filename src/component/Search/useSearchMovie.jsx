import React, { useEffect, useState } from 'react';
import useUtils from '../utils/useUtils';

////// Api de TMDB /////////////////////////z
const API_KEY_TMDB = "bbe34269651625cd81a39afd38610700"; 
const API_URL_TMDB_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY_TMDB}&page=`;


function useSearchMovie() {
    const [inputCritere, setInputCritere] = useState('');
    const [critere, setCritere] = useState('');
    const [movies, setMovies] = useState([]);
    const [moviesTrending, setMoviesTrending] = useState([]);
    const [genreSelect, setGenreSelect] = useState("movie")

    const {handleDetail} = useUtils();


    const handlecritere = () => {
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