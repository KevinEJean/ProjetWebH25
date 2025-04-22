import React from 'react';
import './MovieCard.css'

function MovieCard(props) {
    return (
        <div className="content__shows">
            <div >
                <img src={props.url} alt="Movie Poster" />
                
                <div className="title-box"></div>
                <div className="name">{props.title}</div>
            </div>

        </div>
    );
}

export default MovieCard;
