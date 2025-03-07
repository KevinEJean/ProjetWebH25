import React, { useEffect, useState } from 'react';
import './DetailMovie.css';
import { useParams } from 'react-router-dom';

const API_KEY = "a34708ad";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function DetailMovie() {
    const { title } = useParams();
    const [movie, setMovie] = useState(null);  
    const [ongletActif, setOngletActif] = useState("Apercu");

    const searchMovies = async () => {
        if (title) {
            const response = await fetch(`${API_URL}&t=${title}`); 
            const data = await response.json();
            setMovie(data);
        }
    };

    useEffect(() => {
        if (title) {
            searchMovies();
        }
    }, [title]);

    if (!movie) {
        return <p>En chargement...</p>; 
    }

    return (
        <div className="movie-detail">
            <div className="movie-image">
                <img src={movie.Poster} alt="Movie Poster" />
            </div>
            <div className="movie-info">
                <div className="nav">
                    <a onClick={() => setOngletActif("Apercu")}>Aperçu</a>
                    <a onClick={() => setOngletActif("Cast")}>Cast</a>
                </div>
                <hr />
                {ongletActif === "Apercu" ? (
                    <div className="content">
                        <h1>{movie.Title}</h1>
                        <p>
                            <strong>Rating:</strong> {movie.imdbRating} <span>IMDb</span>
                            <span> | Duration: {movie.Runtime}</span>
                        </p>
                        <p>{movie.Plot}</p>
                        <hr />
                        <p><strong>Release:</strong> {movie.Released}</p>
                        <p><strong>Genre:</strong> {movie.Genre}</p>
                        <p><strong>Awards:</strong> {movie.Awards}</p>
                        <hr />
                        <strong>Details:</strong>
                        <ul>
                            <li><strong>Production:</strong> {movie.Production}</li>
                            <li><strong>Language:</strong> {movie.Language}</li>
                            <li><strong>Country:</strong> {movie.Country}</li>
                        </ul>
                    </div>
                ) : (
                    <div className="content-actor">
                        <h1>Cast</h1>
                        
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetailMovie;
