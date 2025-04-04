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

// à ajouter pour gérer le onclick sur le nom
// <div onClick={props.handleDetail} style={{border:"2px solid"}} className="test">
