import React from 'react';
import "./MoviePage.css";
import MovieCard2 from '../movieCard/MovieCard2';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import useMoviePage from './useMoviePage';
import useUtils from '../utils/useUtils';
import { troubleShoot } from '../utils/useUtils';

function MoviePage() {
    const { moviesTrending, movieFindByFiltre, page, maxPage, genresMovie, imageFiltre, setPage, setMovieRate, handleDisplayGenre, handleCheckCheckbox, handlefiltre, handleResetfiltre } = useMoviePage();

    const { handleDetail } = useUtils();

    if (!moviesTrending) return <p>Chargement des film ....</p>
    troubleShoot();

    return (
        <div className='movie-container'>
            <div className='wrapper-main'>
                <div className="wrapper">
                    <div className="bg"> Movie </div>
                    <div className="fg"> Movie </div>
                </div>
            </div>

            <div className="content-filter" style={{ color: localStorage.getItem("Title-Colors") }}>
                <div className="filters">
                    <a id='latest-flt' onClick={() => setMovieRate('now_playing')}>Latest </a>
                    <a id='trending-flt' onClick={() => setMovieRate('trending')}>Trending </a>
                    <a id='topRated-flt' onClick={() => setMovieRate('top_rated')}>Top-Rated</a>
                </div>

                <a id='genre' onClick={handleDisplayGenre}> Genre <span style={{ paddingLeft: "4px" }}>{imageFiltre}</span></a>

            </div>

            <div className="filter-genre" id='filter-genre' style={{ display: "none" }}>
                <form>
                    {
                        genresMovie && genresMovie.map((genre) => (
                            <div key={genre.id}>
                                <label id='container' onClick={(e) => e.currentTarget.style.color = e.currentTarget.style.color === "rgb(95, 94, 94)" ? localStorage.getItem("Title-Colors") : "rgb(95, 94, 94)"}>
                                    <input id={genre.id} onChange={() => handleCheckCheckbox(genre.id)} type="checkbox" />
                                    <span>{genre.name}</span>
                                </label>
                            </div>
                        ))
                    }
                </form>
                <button id='confirmGenreBtn' onClick={handlefiltre}>Appliquer</button>
                <button onClick={handleResetfiltre}>Reset</button>
            </div>

            <div className="content">
                {
                    movieFindByFiltre.length > 0 ?
                        movieFindByFiltre.map((movie) => (
                            <div key={movie.id} onClick={() => handleDetail("movie", movie.id, movie.title)}>

                                <MovieCard2
                                    url={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    title={movie.title}
                                    type="Movie"
                                    rate={movie.vote_average.toFixed(1)}
                                    year={movie.release_date.split('-')[0]}
                                    language={movie.original_language}
                                />
                            </div>
                        ))
                        :
                        moviesTrending.map((movie) => (
                            <div key={movie.id} onClick={() => handleDetail("movie", movie.id, movie.title)}>

                                <MovieCard2
                                    url={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    title={movie.title}
                                    type="Movie"
                                    rate={movie.vote_average.toFixed(1)}
                                    year={movie.release_date.split('-')[0]}
                                    language={movie.original_language}
                                />
                            </div>
                        ))
                }
            </div>
            
            <div className='pagination-box'>
                <div className="pagination">
                    <FaRegArrowAltCircleLeft id='left' style={{ color: localStorage.getItem("Title-Colors") }}
                        onClick={page > 1 ? () => setPage(page - 1) : () => setPage(1)} />

                    <h2>{page}/{maxPage}</h2>

                    <FaRegArrowAltCircleRight id='right' style={{ color: localStorage.getItem("Title-Colors") }}
                        onClick={page <= maxPage ? () => setPage(page + 1) : () => setPage(maxPage)} />
                </div>
            </div>
        </div>
    );
}
export default MoviePage;