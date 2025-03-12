import React, { useEffect, useState } from 'react';
import './SearchMovie.css';
import MovieCard from '../movieCard/MovieCard';
import { useNavigate } from 'react-router-dom';

////// Api de OMDB pas obliger /////////////////////////
// const API_KEY_OMDB = "a34708ad"; 
// const API_URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

////// Api de TMDB /////////////////////////
const API_KEY_TMDB = "bbe34269651625cd81a39afd38610700"; 
const API_URL_TMDB_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY_TMDB}&page=`;
const API_URL_TMDB = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY_TMDB}&query=`;


function SearchMovie() {
    const [inputCritere, setInputCritere] = useState('');
    const [critereMovie, setCritereMovie] = useState('');
    const [movies, setMovies] = useState([]);
    const [moviesTrending, setMoviesTrending] = useState([]);
    const imageFiltre = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
  </svg>


    const navigate = useNavigate();

    const handlecritere = () => {
        console.log("Critère: ", inputCritere);
        setCritereMovie(inputCritere);
        setInputCritere("");
    };

    const handleDetail = (id,title) => {
        navigate(`/detail/${id}/${title}`);
    };


    const searchMovies = async () => {
        const response = await fetch(`${API_URL_TMDB}${critereMovie}`);
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
        if (critereMovie) {
            searchMovies();
        }
    }, [critereMovie]);

    console.log("Movie Trending: ",moviesTrending)
    console.log("Movie result: ",movies)

    return (
        <div className='containerSearch'>
            <div className="searchBar">
                {imageFiltre}
                <input 
                    type="text" 
                    className="searchTerm" 
                    value={inputCritere} 
                    placeholder="Search by title, genre, year" 
                    onChange={(e) => setInputCritere(e.target.value)} 
                    required
                />
                <button onClick={handlecritere} type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <hr />

            <div className="searchResult">
                
                {
                    
                    movies.length > 0 ? 
                    movies.map((movie, key) => (
                            <p key={key} onClick={() => handleDetail(movie.id, movie.title)}>
                                    <MovieCard 
                                        url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                        title={movie.title} 
                                    />
                                </p>
                    ))
                    :
                    moviesTrending.length > 0 ?
                        moviesTrending.map((movie, key) => (
                            <p key={key} onClick={() => handleDetail(movie.id, movie.title)}>
                                <MovieCard 
                                    url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                    title={movie.title} 
                                />
                            </p>
                        ))
                        : <h3>Aucun résultat trouvé</h3>
                        
                }
            </div>
        </div>
    );
}

export default SearchMovie;
