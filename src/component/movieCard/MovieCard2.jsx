import React from 'react';
import './MovieCard2.css';

function MovieCard({ url, title, type, rate, year, language, genre }) {
    return (
        <div className="container-card">
            <div className="content-card">
                <img className="movie-image" src={url} alt={title} />
                <div className="movie-info">
                    <h3 className="movie-title">{title}</h3>
                    <p><strong>{type} • {rate} • {year} • {language.toUpperCase()}</strong></p>
                </div>
            </div>
        </div>
        
    );
}

export default MovieCard;
