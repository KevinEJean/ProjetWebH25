import React from 'react';
import "./MoviePage.css";
import { useNavigate } from 'react-router-dom';
import MovieCard2 from '../movieCard/MovieCard2';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import useMoviePage from './useMoviePage';
import useUtils from '../utils/useUtils';
import { troubleShoot } from '../utils/useUtils';

const genresTv = [
    { name: "Action & Adventure", id: 10759 }, { name: "Animation ", id: 16 }, { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 }, { name: "Documentary", id: 99 }, { name: "Drama", id: 18 },
    { name: "Family", id: 10751 }, { name: "Kids", id: 10762 }, { name: "Mystery", id: 9648 },
    { name: "News", id: 10763 }, { name: "Reality", id: 10764 }, { name: "Sci-Fi & Fantasy", id: 10765 },
    { name: "Soap", id: 10766 }, { name: "Talk", id: 10767 }, { name: "War & Politics", id: 10768 },
    { name: "Western", id: 37 }
]

function MoviePage() {
    const { moviesTrending, movieFindByFiltre, page, maxPage, genresMovie, imageFiltre, setPage, setMovieRate, handleDisplayGenre, handleCheckCheckbox, handlefiltre, handleResetfiltre } = useMoviePage();

    const { handleDetail } = useUtils();

    if (!moviesTrending) return <p>Chargement des film ....</p>

    troubleShoot();

    return (
        <div className='movie-container'>
            <h2 style={{ textAlign: "center", marginTop: "1em" }}>Movies</h2>
            <div className="content-filter" style={{ color: localStorage.getItem("Title-Colors") }}>
                <div className="filters">
                    <a onClick={() => setMovieRate('now_playing')}>Latest </a>
                    <a onClick={() => setMovieRate('trending')}>Trending </a>
                    <a onClick={() => setMovieRate('top_rated')}>Top-Rated</a>

                </div>

                <a id='genre' onClick={handleDisplayGenre}>Genre <span style={{ paddingLeft: "4px" }}>{imageFiltre}</span></a>

            </div>

            <div className="filter-genre" id='filter-genre' style={{ display: "none" }}>
                {/*// problème de couleur à régler*/}
                <form>
                    {
                        genresMovie && genresMovie.map((genre) => (
                            <div >
                                <label id='container' onClick={(e) => e.currentTarget.style.color = e.currentTarget.style.color === "rgb(95, 94, 94)" ? "gold" : "rgb(95, 94, 94)"}>
                                    <input id={genre.id} onChange={() => handleCheckCheckbox(genre.id)} type="checkbox" />
                                    <span>{genre.name}</span>
                                </label>
                            </div>
                        ))
                    }
                </form>
                <button onClick={handlefiltre}>Appliquer</button>
                <button onClick={handleResetfiltre}>Reset</button>
            </div>

            <div className="content">
                {
                    movieFindByFiltre.length > 0 ?
                        movieFindByFiltre.map((movie, key) => (
                            <div key={key} onClick={() => handleDetail(movie.id, movie.title)}>

                                <MovieCard2 onClick={() => handleDetail(movie.id, movie.title)}
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
                        moviesTrending.map((movie, key) => (
                            <div key={key} onClick={() => handleDetail(movie.id, movie.title)}>

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