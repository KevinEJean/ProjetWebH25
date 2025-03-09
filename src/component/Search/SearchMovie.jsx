import React, { useEffect, useState } from 'react';
import './SearchMovie.css';
import MovieCard from '../MovieCard';
import { useNavigate } from 'react-router-dom';

import MovieThor from '../../assets/thor.jpg';
import MovieSpider from '../../assets/spiderman.jpg';
import MovieScream from '../../assets/scream.jpg';
import MovieSuperman from '../../assets/superman.jpg';

const moviesRecent = [
    { id: 10, title: "Scream VI", image: MovieScream },
    { id: 11, title: "Spider-Man", image: MovieSpider },
    { id: 12, title: "Superman", image: MovieSuperman },
    { id: 13, title: "Thor", image: MovieThor },
];

const API_KEY = "a34708ad"; 
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function SearchMovie() {
    const [inputCritere, setInputCritere] = useState('');
    const [critereMovie, setCritereMovie] = useState('');
    const [movies, setMovies] = useState(moviesRecent);
    const navigate = useNavigate();

    const handlecritere = () => {
        console.log("Critère: ", inputCritere);
        setCritereMovie(inputCritere);
        setInputCritere("");
    };

    const handleDetail = (title) => {
        navigate(`/detail/${title}`);
    };

    const searchMovies = async () => {
        const response = await fetch(`${API_URL}&s=${critereMovie}&y=${critereMovie}`);
        const data = await response.json();
        setMovies(data.Search || []);
    };


    

    useEffect(() => {
        if (critereMovie) {
            searchMovies();
            // searchMovies2
        }
    }, [critereMovie]);

    return (
        <div className='containerSearch'>
            <div className="searchBar">
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
                            <p key={key} onClick={() => handleDetail(movie.title || movie.Title)}>
                                <MovieCard url={movie.image || movie.Poster} title={movie.title || movie.Title} />
                            </p>
                        ))
                        :
                        <h3>Aucun résultat trouvé</h3>
                }
            </div>
        </div>
    );
}

export default SearchMovie;
