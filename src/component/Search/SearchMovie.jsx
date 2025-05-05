import React, { useEffect, useState } from 'react';
import './SearchMovie.css';
import MovieCard from '../movieCard/MovieCard';
import useSearchMovie from './useSearchMovie';


function SearchMovie() {
    const {inputCritere, setInputCritere, movies, moviesTrending, genreSelect, setGenreSelect,handlecritere, handleDetail} = useSearchMovie();
    
    let type = genreSelect;
    return (
        <div className='containerSearch'>
            <div className="searchBar">
                <select id="genreSelect" onChange={(e) => setGenreSelect(e.target.value)}>
                    <option id='genreMovie' value="movie">Film</option>
                    <option id='genreTv' value="tv">serie</option>
                </select>
                <input type="text" className="searchTerm" value={inputCritere} placeholder="Search by title, genre, year" onChange={(e) => setInputCritere(e.target.value)} required />
                
                <button onClick={handlecritere} type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <hr />

            <div className="searchResult">
                {
                    movies.length > 0 ? 
                        genreSelect === "movie" ? 
                            movies.map((movie) => (
                                <div key={movie.id} onClick={() => handleDetail(type, movie.id, movie.title)}>
                                        <MovieCard url={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} title={movie.title} />
                                </div>
                        )) 
                        :
                        movies.map((serie) => (
                            <div key={serie.id} onClick={() => handleDetail(type ,serie.id, serie.title)}>
                                    <MovieCard url={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} title={serie.original_name} />
                                </div>
                            ))
                    :
                    moviesTrending.length > 0 ?
                        moviesTrending.map((movie) => (
                        <div key={movie.id} onClick={() => handleDetail(type, movie.id, movie.title)}>
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