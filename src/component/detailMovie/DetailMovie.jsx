import React, { useState } from 'react';
import './DetailMovie.css';
import { useParams } from 'react-router-dom';

import MovieAvatar from '/src/assets/avatar.png';
import MovieThor from '../../assets/thor.jpg';
import MovieAddam from '../../assets/blackaddam.jpg';
import MovieSpider from '../../assets/spiderman.jpg';
import MovieScream from '../../assets/scream.jpg';
import MovieSuperman from '../../assets/superman.jpg';
import MovieOppenheim from '../../assets/oppenhaimer.jpg';
import MovieFreeGuy from '../../assets/freeguy.jpg';
import MovieDeadpool from '../../assets/deadpool.jpg';
import MovieAquaman from '../../assets/aquaman.jpg';
import MovieAvenger from '../../assets/avenger.jpg';
import MovieJumanji from '../../assets/jumanji.jpg';
import MoviePixel from '../../assets/pixel.jpg';
import MovieCard from '../MovieCard';

const moviesRecent = [
    { id: 1, title: "Aquaman", image: MovieAquaman },   
    { id: 2, title: "Avenger", image: MovieAvenger },
    { id: 3, title: "Avatar", image: MovieAvatar },
    { id: 4, title: "Black Adam", image: MovieAddam },
    { id: 5, title: "Deadpool", image: MovieDeadpool },
    { id: 6, title: "Free Guy", image: MovieFreeGuy },
    { id: 7, title: "Jumanji", image: MovieJumanji },
    { id: 8, title: "Oppenheimer", image: MovieOppenheim },
    { id: 9, title: "Pixel", image: MoviePixel },
    { id: 10, title: "Scream VI", image: MovieScream },
    { id: 11, title: "Spider-Man", image: MovieSpider },
    { id: 12, title: "Superman", image: MovieSuperman },
    { id: 13, title: "Thor", image: MovieThor },
];

// Ajouter d'auutre key comme descriptio n et genre

function DetailMovie() {
    const { id } = useParams();
    // const movie = moviesRecent.find(m => m.id === Number(id));
    const movie = moviesRecent.find((movie) => movie.id === Number(id));
    const [ongletActif, setOngletActif] = useState("Apercu");

    return (
        <div className="movie-detail">
                <div className="movie-image">
                    <img src={movie.image} alt="Movie Poster" /><br />
                    <h1>{movie.title}</h1>
                </div>
            <div className="movie-info">
                <div className="nav">
                    <a onClick={() => setOngletActif("Apercu")}>Aperçu</a>
                    <a onClick={() => setOngletActif("Cast")}>Cast</a>
                </div>  
                <hr />
                    {
                       ongletActif === "Apercu" ? 
                            <div className="content">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, consequatur necessitatibus nemo reprehenderit minus beatae iste accusamus quae veniam voluptatum doloremque, natus cupiditate iure enim repellat ipsum. Placeat, ut sit!</p>
                                <hr />
                                <div>
                                    <strong>Release</strong>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt nisi non vero corrupti ab ea et magnam similique, repellat voluptate labore unde sint, ut dolor cum voluptatum optio cumque!
                                </div>
                                <hr />
                                <div>
                                    <strong>Genre</strong>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas alias iure dolorum, non maiores omnis delectus laborum et saepe sequi officia libero eos tempora. Commodi hic aliquid numquam sequi!</p>
                                </div>
                                <hr />
                                <div>
                                    <strong>Detail</strong>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reprehenderit fugit numquam obcaecati aspernatur nobis quam, pariatur ex debitis praesentium eveniet. Deleniti odit eum nostrum ducimus consequatur officia eos obcaecati.</p>
                                </div>
                            </div>
                            :
                            <h1>Cast</h1>
                    }

                    {/* {
                        ongletActif === "Cast" ? 
                        <div>
                            <h1>Cast</h1>
                        </div>
                        :
                        <p></p>
                    } */}
            </div>
        </div>
    );
}

export default DetailMovie;
