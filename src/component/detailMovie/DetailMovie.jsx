import React, { useState } from 'react';
import './DetailMovie.css';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel1 from '../movieCard/carousel/Carousel1';
import useDetailMovie from './useDetailMovie';
import Carousel3 from '../movieCard/carousel/Carousel3';
import { troubleShoot } from '../utils/useUtils';

function DetailMovie() {
    // const { id,title } = useParams();
    const { movieOmdb, moviePosterTmdb, movieRecommendation, ongletActor, setOngletActor, ongletMedia, setOngletMedia, movieActors, movieCrew, movieImages, movieVideos } = useDetailMovie();

    // ############################# BUG FIXES #############################
    if (!movieOmdb) return <p>Film information is loading...</p>;
    if (!movieRecommendation) return <p>Movie recommendations are loading...</p>;
    if (!movieActors) return <p>Actors information is loading...</p>;
    troubleShoot();

    function loadMoviePosterBackdrops(choices) {
        if (ongletMedia == "Posters") {
            return movieImages.posters.map((image, key) => (
                <img key={key} src={`https://image.tmdb.org/t/p/original/${image.file_path}`} />
            ))
        }
        if (ongletMedia == "Backdrops") {
            return movieImages.backdrops.map((image, key) => (
                <img key={key} src={`https://image.tmdb.org/t/p/original/${image.file_path}`} />
            ))
        }
    }

    function CheckAvailability() {
        var netflix = document.getElementsByClassName("netflix");
        var crave = document.getElementsByClassName("crave");
        var hulu = document.getElementsByClassName("hulu");
        var primeVideo = document.getElementsByClassName("primeVideo");
        var title = document.getElementById("movieTitle");

        // netflix
        // code here

        // crave
        window.open(`https://www.crave.ca/fr/movies/${title.textContent}`, '_blank').focus();
        // if 404 do nothing
        // else hulu.style.display = "initial";

        // hulu
        window.open(`https://www.hulu.com/movie/${title.textContent}`, '_blank').focus();
        // if 404 do nothing
        // else hulu.style.display = "initial";


        // prime video
        // code here
    }

    // window.onclick = () => {
    //     CheckAvailability();
    // }

    return (
        <div className="container-detail" >

            <div className="movie-detail"
            // à voir si à garder ou pas
            // style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${moviePosterTmdb.poster_path}`})`}}
            >

                {/*///////// Movie Info////////////////////////////////////////////// */}
                <div className="movie-image" >
                    <img src={`https://image.tmdb.org/t/p/original${moviePosterTmdb.poster_path}`} alt={moviePosterTmdb.title || "Affiche du film"} />
                </div>

                <div className="movie-info">
                    <div className="content-info">
                        <h1 id='movieTitle' style={{ textShadow: "2px 2px black" }}>{movieOmdb.Title}</h1>
                        <p className='rate'>

                            <strong>Metascore: ⭐{movieOmdb.Metascore}% </strong>

                            <span id='OMDb'>OMDb</span>
                            <span id='rating'>{movieOmdb.imdbRating}/10</span>
                            <span id='r'>{movieOmdb.Year}</span>
                            <span id='r'>{movieOmdb.Runtime}</span>

                        </p>
                        <p>{movieOmdb.Plot}</p>
                        <hr />
                        <p><strong>Release :</strong> {movieOmdb.Released}</p>
                        <p><strong>Director :</strong> {movieOmdb.Director}</p>
                        <p><strong>Genre :</strong> {movieOmdb.Genre}</p>
                        <p><strong>Type :</strong> {movieOmdb.Type}</p>
                        <p><strong>Actor : </strong>{movieOmdb.Actors}</p>
                        <p><strong>Writer : </strong>{movieOmdb.Writer}</p>
                        {/* <p><strong>Availaible on : </strong>
                            <img className='netflix' alt='netflixLogo' src='/src/assets/netflix.png' />
                            <img className='crave' alt='craveLogo' src='/src/assets/crave.png' />
                            <img className='hulu' alt='huluLogo' src='/src/assets/hulu.png' />
                            <img className='primeVideo' alt='primeVideoLogo' src='/src/assets/prime_video.png' />
                        </p> */}
                        {/* <hr />
                            <strong>Details:</strong>
                            <ul>
                                <li><strong>Production:</strong> {movieOmdb.Production}</li>
                                <li><strong>Language:</strong> {movieOmdb.Language}</li>
                                <li><strong>Country:</strong> {movieOmdb.Country}</li>
                                <li><strong>Awards :</strong> {movieOmdb.Awards}</li>
                                <li><strong>Box Office :</strong> {movieOmdb.BoxOffice}</li>
                                <li><strong>DVD :</strong> {movieOmdb.DVD}</li>
                            </ul> */}
                        <button className='addToInfoList'>Add to InfoList</button>
                    </div>
                </div>
            </div>
            <hr />

            {/*///////// Actor Info////////////////////////////////////////////// */}

            <div className="container-nav-media">
                <h3>Tête d'affiche</h3>
                <div className="nav-media">
                    <a onClick={() => setOngletActor("Cast")}>Cast</a>
                    <a onClick={() => setOngletActor("Crew")}>Crew</a>
                </div>
            </div>
            <div className="content-actor">

                {ongletActor === "Cast" && movieActors.length > 0 &&
                    <Carousel3 actorCarousel={movieActors} poster={null} />
                }

                {ongletActor === "Crew" && movieCrew.length > 0 &&
                    <Carousel3 actorCarousel={movieCrew} poster={null} />
                }
            </div>

            {/*///////// Media(video,image,poster)////////////////////////////////////////////// */}

            <div className="container-nav-media">
                <h3>Média</h3>
                <div className="nav-media">
                    <a onClick={() => setOngletMedia("Videos")}>Videos</a>
                    <a onClick={() => setOngletMedia("Posters")}>Posters</a>
                    <a onClick={() => setOngletMedia("Backdrops")}>Backdrops</a>
                </div>
            </div>
            <div className="media">
                {
                    ongletMedia === "Videos" &&
                    <div className='media-video'>
                        {
                            movieVideos.slice(0, 10).map((video, key) => (
                                <iframe key={key} width="560" height="315"
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                >
                                </iframe>
                            ))
                        }
                    </div>
                }
                {ongletMedia === "Posters" && loadMoviePosterBackdrops("Posters")}
                {ongletMedia === "Backdrops" && loadMoviePosterBackdrops("Backdrops")}

            </div>
            <hr />
            {/*///////// Film recommendé////////////////////////////////////////////// */}
            <h3>Titre similaire</h3>
            <div className="recommandations">
                <Carousel1 movieCarousel={movieRecommendation} actorCarousel={null} />
            </div>

        </div>
    );
}
export default DetailMovie;