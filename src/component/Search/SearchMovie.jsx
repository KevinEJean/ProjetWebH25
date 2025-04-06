import React, { useEffect, useState } from 'react';
import './SearchMovie.css';
import MovieCard from '../movieCard/MovieCard';
import useSearchMovie from './useSearchMovie';


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
                                    <MovieCard url={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} title={movie.title} />
                                    {/* <MovieCard url={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} title={movie.title} /> */}
                            </div>
                    ))
                    :
                    moviesTrending.length > 0 ?
                        moviesTrending.map((movie, key) => (
                            <div key={key} onClick={() => handleDetail(movie.id, movie.title)}>
                                <MovieCard url={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} title={movie.title} />
                            </div>
                        ))
                        : <h3>Aucun résultat trouvé</h3> 
                }
            </div>
        </div>
    );
}

export default SearchMovie;