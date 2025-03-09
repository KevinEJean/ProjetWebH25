import React, { useEffect, useState } from 'react';
import './DetailMovie.css';
import { useParams } from 'react-router-dom';

const API_KEY = "a34708ad";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function DetailMovie() {
    const { title } = useParams();
    const [movie, setMovie] = useState(null);  
    const [ongletActif, setOngletActif] = useState("Info");

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
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="movie-info">
                <div className="nav">
                    <a onClick={() => setOngletActif("Info")}>Info</a>
                    <a onClick={() => setOngletActif("Cast")}>Cast</a>
                </div>
                {ongletActif === "Info" ? (
                    <div className="content-info">
                        <h1 style={{textShadow:"2px 2px black"}}>{movie.Title}</h1>
                        <p className='rate'>
                            
                        <strong>Metascore: ⭐{movie.Metascore}% </strong>     
                        

                        <span id='OMDb'>OMDb</span> 
                        <span id='rating'>{movie.imdbRating}/10</span> 
                        <span id='r'>{movie.Year}</span>
                        <span id='r'>{movie.Runtime}</span>

                        </p>
                        <p>{movie.Plot}</p>
                        <hr />
                        <p><strong>Release :</strong> {movie.Released}</p>
                        <p><strong>Director :</strong> {movie.Director}</p>
                        <p><strong>Genre :</strong> {movie.Genre}</p>
                        <p><strong>Type :</strong> {movie.Type}</p>
                        <hr />
                        <strong>Details:</strong>
                        <ul>
                            <li><strong>Production:</strong> {movie.Production}</li>
                            <li><strong>Language:</strong> {movie.Language}</li>
                            <li><strong>Country:</strong> {movie.Country}</li>
                            <li><strong>Awards :</strong> {movie.Awards}</li>
                            <li><strong>Box Office :</strong> {movie.BoxOffice}</li>
                            <li><strong>DVD :</strong> {movie.DVD}</li>
                        </ul>
                    </div>
                ) : (
                    <div className="content-actor">
                        {/* <img src={movie} alt="" /> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetailMovie;
