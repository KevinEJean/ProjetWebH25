import React from 'react';
import './MovieCard.css'
import { CiBookmark } from "react-icons/ci";

function MovieCard(props) {
    return (
        <div class="content__shows">
            <div >
                <img src={props.url} alt="Movie Poster" />
                
                <div class="favorit-box"></div>
                <h5 className='favorit'><CiBookmark/></h5>
                
                <div class="title-box"></div>
                <div class="name">{props.title}</div>
            </div>

        </div>
    );
}

export default MovieCard;

// à ajouter pour gérer le onclick sur le nom
// <div onClick={props.handleDetail} style={{border:"2px solid"}} className="test">
