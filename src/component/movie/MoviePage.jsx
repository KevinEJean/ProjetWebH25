import React, { useEffect, useState } from 'react';
import "./MoviePage.css";
import { useNavigate } from 'react-router-dom';
import MovieCard from '../movieCard/MovieCard';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const API_KEY = "bbe34269651625cd81a39afd38610700"; 
const API_URL_A_l_AFFICHE = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=`;
const API_URL_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`;
const API_URL_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=`;
function MoviePage() {
    // const [moviesRecent, setMoviesRecent] = useState([])
    // const [moviesTopRated, setMoviesTopRated] = useState([])
    const [moviesTrending, setMoviesTrending] = useState([])
    const [filtre, setFiltre] = useState(null)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const navigate = useNavigate()

    const handleDetail = (id,title) => {
        navigate(`/detail/${id}/${title}`);
    };

    const searchMoviesRecent = async () => {
        const response = await fetch(`${API_URL_A_l_AFFICHE}${1}`);
        const data = await response.json();
        setMoviesRecent(data.results || []);
    };

    const searchMoviesTopRated = async () => {
        const response = await fetch(`${API_URL_TOP_RATED}${3}`);
        const data = await response.json();
        setMoviesTopRated(data.results || []);
    };

    const searchTrendingMovie = async (page) => {
        const response = await fetch(`${API_URL_TRENDING}${page}`);
        const data = await response.json();
        setMoviesTrending(data.results || []);
        setMaxPage(data.total_pages)

    };

    useEffect(() => {
        // searchMoviesRecent()
        searchTrendingMovie(page);
        // searchMoviesTopRated()
    }, [page]);

    console.log(`current Page: ${page}: ${maxPage}`)
    return (
        <div className='movie-container'>
            <h2>Movies</h2>
            
            <div className="content">
                {
                    moviesTrending.map((movie, key) => (
                        <p key={key} onClick={() => handleDetail(movie.id, movie.title)}>
                            <MovieCard url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                            title={movie.title} 
                            />
                        </p>
                    ))
                }

                <div className="pagination">
                    <FaRegArrowAltCircleLeft id='left' onClick={page > 1 ? () => setPage(page - 1) : () => setPage(1)} /> 
                    <FaRegArrowAltCircleRight id='right' onClick={page <= maxPage ? () => setPage(page + 1) : () => setPage(maxPage)} /> 
                </div>  

            </div>

        </div>
    );
}

export default MoviePage;