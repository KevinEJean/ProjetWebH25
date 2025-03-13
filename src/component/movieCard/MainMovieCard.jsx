import React from 'react';
import './MainMovieCard.css';
import MovieAddam from '/src/assets/blackaddam.jpg';

function MainMovieCard(props) {
    return (
        <div className='container-card-main'>
            <div class="movie_card" id="ave">
                <div class="info_section">
                    <div class="movie_header">
                    {/* <img class="locandina" src={props.url}/> */}
                    <h1>{props.title}</h1>
                    <p class="text">
                        {props.plot}
                    </p>
                    <h4>{props.year}</h4>
                    <span class="minutes">{props.lang}</span>
                    <p class="type">Action, Adventure, Sci-Fi</p>
                    </div>
   
                </div>
                    <div class="blur_back ave_back" style={{ backgroundImage: `url(${props.url})` }}
                        >
                        </div>
                </div>
        </div>
    );
}

export default MainMovieCard;