import React, { useEffect, useState } from 'react';
import './SearchMovie.css';
import MovieCard from '../movieCard/MovieCard';
import { useNavigate } from 'react-router-dom';
import useUtils from '../utils/useUtils';
import useSearchMovie from './useSearchMovie';

////// Api de OMDB pas obliger /////////////////////////
// const API_KEY_OMDB = "a34708ad"; 
// const API_URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

////// Api de TMDB /////////////////////////
// const API_KEY_TMDB = "bbe34269651625cd81a39afd38610700"; 
// const API_URL_TMDB_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY_TMDB}&page=`;
// const API_URL_TMDB = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_TMDB}&query=`;


function SearchMovie() {
    const {inputCritere, setInputCritere, movies, moviesTrending, imageFiltre, handlecritere, handleDetail} = useSearchMovie();

    return (
        <div className='containerSearch'>
            <div className="searchBar">
                {imageFiltre}
                <input type="text" className="searchTerm" value={inputCritere} placeholder="Search by title, genre, year" onChange={(e) => setInputCritere(e.target.value)} required />
                
                <button onClick={handlecritere} type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <hr />

            <div className="searchResult">
                {
                    movies.length > 0 ? 
                    movies.map((movie, key) => (
                            <div key={key} onClick={() => handleDetail(movie.id, movie.title)}>
                                    <MovieCard url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} title={movie.title} />
                            </div>
                    ))
                    :
                    moviesTrending.length > 0 ?
                        moviesTrending.map((movie, key) => (
                            <div key={key} onClick={() => handleDetail(movie.id, movie.title)}>
                                <MovieCard url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} title={movie.title} />
                            </div>
                        ))
                        : <h3>Aucun résultat trouvé</h3> 
                }
            </div>
        </div>
    );
}

export default SearchMovie;