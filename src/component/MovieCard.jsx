import React from 'react';
import './MovieCard.css'
function MovieCard(props) {
    return (
        <div class="content__shows">
            <div >
                <img src={props.url} alt="Movie Poster" />
                <div class="title-box"></div>
                <div class="name">{props.title}</div>
            </div>
        </div>
    );
}

export default MovieCard;