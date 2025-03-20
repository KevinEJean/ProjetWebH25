import React, { useEffect, useState } from 'react';
import "./MoviePage.css";
import { useNavigate } from 'react-router-dom';
import MovieCard from '../movieCard/MovieCard';
import MovieCard2 from '../movieCard/MovieCard2';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import VideoBackground from '/src/assets/video1.mp4';

const API_KEY = "bbe34269651625cd81a39afd38610700"; 
const API_URL_LATEST = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=`;
const API_URL_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`;
const API_URL_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=`;

function MoviePage() {
    // const [moviesRecent, setMoviesRecent] = useState([])
    // const [moviesTopRated, setMoviesTopRated] = useState([])
    const [moviesTrending, setMoviesTrending] = useState([])
    const [movieRate, setMovieRate] = useState('now_playing')
    const [movieFiltres, setMovieFiltres] = useState([])
    const [filtre, setFiltre] = useState({
        type:"movie",
        genre:null,
        pays:null
    })

    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const navigate = useNavigate()
    console.log("movie Rate: ", movieRate)

    const imageFiltre = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
    </svg>

    const handleDetail = (id,title) => {
        navigate(`/detail/${id}/${title}`);
    };

    const searchTrendingMovie = async (movieRate,page) => {
        let response = null;

        if (movieRate === "trending") {
            response = await fetch(`${API_URL_TRENDING}${page}`)
        } else {
            response = await fetch(`${`https://api.themoviedb.org/3/movie/${movieRate}?api_key=${API_KEY}&page=`}${page}`)
        }
        const data = await response.json();
        setMoviesTrending(data.results || []);
        setMaxPage(data.total_pages)
    };


    const handleDisplay = () => {
        let displayType = document.getElementById('filter-type');
        
        if (displayType.style.display === "none") {
            displayType.style.display = "block";
        } else {
            displayType.style.display = "none";
        }
    }
 
    useEffect(() => {
        // searchMoviesRecent()
        searchTrendingMovie(movieRate,page);
        // searchMoviesTopRated()
    }, [movieRate,page]);


    if (!moviesTrending) return <p>Chargement des film ....</p>

    console.log(`current Page: ${page}: ${maxPage}`)
    return (
        <div className='movie-container'>
            <h2>Movies</h2>
            <div className="content-filter">
                
                <div className="filters">
                    <a onClick={() => setMovieRate('now_playing')}>Latest </a>
                    <a onClick={() => setMovieRate('trending')}>Trending </a>
                    <a onClick={() => setMovieRate('top_rated')}>Top-Rated</a>

                    {/*---------------------- */}

                    <a onClick={handleDisplay}>Type{imageFiltre} </a>
                    <a>Genre{imageFiltre} </a>
                    <a>Pays{imageFiltre}</a>
                </div>
            </div>
            <div className="filter-type" id='filter-type' style={{display:"none"}}>
                    <form >
                        <input type="radio" name='type'/>:<label htmlFor="TypeMovie">Movie</label>
                        <input type="radio" name='type'/><label htmlFor="TypeMovie">Serie</label>   
                        <input type="radio" name='type'/><label htmlFor="TypeMovie">Animation</label>
                    </form>
                    <button>Appliquer</button>
                </div>

            <div className="content">
                {
                    movieFiltres.lenght > 0 ?
                        <h1>test</h1>
                        :
                        moviesTrending.map((movie, key) => (
                            <p key={key} onClick={() => handleDetail(movie.id, movie.title)}>
                                {/* <MovieCard url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                title={movie.title} 
                                />  */}
                                
                                <MovieCard2 
                                    url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                    title={movie.title} 
                                    type="Movie"
                                    rate={movie.vote_average}
                                    year={movie.release_date.split('-')[0]}
                                    language={movie.original_language}
                                    // genre={getGenreNames(movie.genre_ids)} 
                                /> 
                            </p>
                        ))
                }

                <div className="pagination">
                    <FaRegArrowAltCircleLeft id='left' 
                    onClick={page > 1 ? () => setPage(page - 1) : () => setPage(1)} /> 

                    <h4>{page}/{maxPage}</h4>

                    <FaRegArrowAltCircleRight id='right' 
                    onClick={page <= maxPage ? () => setPage(page + 1) : () => setPage(maxPage)} /> 
                </div>  

            </div>

        </div>
    );
}

export default MoviePage;