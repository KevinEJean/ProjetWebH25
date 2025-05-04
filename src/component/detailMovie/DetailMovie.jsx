import React, { useState } from 'react';
import './DetailMovie.css';
import Carousel1 from '../movieCard/carousel/Carousel1';
import useDetailMovie from './useDetailMovie';
import { blankAvatarStyler } from './useDetailMovie';
import Carousel3 from '../movieCard/carousel/Carousel3';
import { troubleShoot } from '../utils/useUtils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DetailMovie() {
    // const { id,title } = useParams();
    const {type, DataOmdb, dataInfo, dataPosterTmdb, dataRecommendation, ongletActor, setOngletActor, ongletMedia, setOngletMedia, dataActors, dataCrew, dataImages, dataVideos } = useDetailMovie();
    const navigate = useNavigate()
    const [paramount, setParamount] = useState();
    const [crave, setCrave] = useState();
    const [hulu, setHulu] = useState();
    const [primeVideo, setPrimeVideo] = useState();

    // ############################# BUG FIXES #############################
    if (!DataOmdb) return <p>Film information is loading...</p>;
    if (!dataRecommendation) return <p>Movie recommendations are loading...</p>;
    if (!dataActors) return <p>Actors information is loading...</p>;
    troubleShoot();
    blankAvatarStyler();
    


    function addFavorit() {
        if (sessionStorage.getItem("onlineStatus") == "true") {
            let favoriToAdd = {
                movieApiId: dataPosterTmdb.id,
                titre: type === "movie" ? dataPosterTmdb.original_title : dataPosterTmdb.original_name,
                imageUrl: `https://image.tmdb.org/t/p/original${dataPosterTmdb.poster_path}`,
                type: type
            };
    
            axios.post(`http://localhost:8080/favoriteList/add/${sessionStorage.getItem("id")}`, favoriToAdd)
            .then(response => {
                console.log(`${favoriToAdd.titre} à été ajouté au Favori avec succès`, response.data);
            })
            .catch(error => {
                console.error("Erreur lors de l'ajout du favori", error);
            });
        } else {
            alert("you must login first")
            navigate("/login")
        }
    }

    function loadMoviePosterBackdrops(choices) {
        if (ongletMedia == "Posters") {
            return dataImages.posters.map((image) => (
                <img key={image.id} src={`https://image.tmdb.org/t/p/original/${image.file_path}`} />
            ))
        }
        if (ongletMedia == "Backdrops") {
            return dataImages.backdrops.map((image, key) => (
                <img key={image.id} src={`https://image.tmdb.org/t/p/original/${image.file_path}`} />
            ))
        }
    }

    function checkAvailability() {
        var title = document.getElementById("movieTitle").textContent.trim().toLowerCase().replace(/\s+/g, '-');

        // paramount  
        // *************juste pour les série*************
        // function paramount() {
        //     window.open(`https://www.paramountplus.com/ca/shows//${title}/`, '_blank');
        //     if (window.location != `https://www.hulu.com/movie/${title}`) {
        //         setCrave(true);
        //         console.log("PARAMOUNT : Page found !");
        //     } else {
        //         setCrave(false);
        //         console.log("PARAMOUNT : Page not found !");
        //     }
        // };

        //crave
        // setTimeout(function crave() {
        //     window.open(`https://www.crave.ca/fr/movies/${title}`, '_blank').focus();
        //     if (window.location != `https://www.hulu.com/movie/${title}`) {
        //         setCrave(true);
        //         console.log("CRAVE : Page found !");
        //     } else {
        //         setCrave(false);
        //         console.log("CRAVE : Page not found !");
        //     }
        // });

        // hulu
        // setTimeout(function hulu() {
        //     window.open(`https://www.hulu.com/movie/${title}`, '_blank');
        //     if (window.location != `https://www.hulu.com/movie/${title}`) {
        //         setHulu(true);
        //         console.log("HULU : Page found !");
        //     } else {
        //         setHulu(false);
        //         console.log("HULU : Page not found !");
        //     }
        // }, 2000);
    }

    // window.onclick = function() {checkAvailability();}

    return (
        <div className="container-detail" >

            <div className="movie-detail"
            // à voir si à garder ou pas
            // style={{backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${dataPosterTmdb.poster_path}`})`}}
            >

                {/*///////// Movie Info////////////////////////////////////////////// */}
                <div className="movie-image" >
                    <img src={`https://image.tmdb.org/t/p/original${dataPosterTmdb.poster_path}`} alt={dataPosterTmdb.title || "Affiche du film"} />
                </div>

                {
                    type === "movie" ? 
                    <div className="movie-info">
                    <div className="content-info">
                        <h1 id='movieTitle' style={{ textShadow: "2px 2px black" }}>{DataOmdb.Title}({DataOmdb.Released.split(' ')[2]})</h1>
                        <p className='rate'>

                        <strong>Rating: ⭐{DataOmdb.Metascore}% </strong>

                        <span id='OMDb'>OMDb</span>
                        <span id='rating'>{DataOmdb.imdbRating}/10</span>
                        <span id='r'>{DataOmdb.Runtime}</span>

                        </p>
                        <p>{dataInfo.overview}</p>
                        <hr />
                        <p><strong>Release :</strong> {DataOmdb.Released}</p>
                        <p><strong>Director :</strong> {DataOmdb.Director}</p>
                        <p><strong>Genre :</strong> {DataOmdb.Genre}</p>
                        
                        <p><strong>Type :</strong> {type}</p>
                        <p><strong>Actor : </strong>{DataOmdb.Actors}</p>
                        <p><strong>Budget : </strong>{dataInfo.budget} $</p>

                        <button className='addToInfoList' onClick={() => addFavorit()}>Add to InfoList</button>
                    </div>
                </div>
                :
                <div className="movie-info">
                    <div className="content-info">
                        <h1 id='movieTitle' style={{ textShadow: "2px 2px black" }}>{DataOmdb.Title}</h1>
                        <p className='rate'>

                        <strong>Metascore: ⭐{Math.round(dataInfo.vote_average)/10 * 100}% </strong>

                        <span id='OMDb'>OMDb</span>
                        <span id='rating'>{DataOmdb.imdbRating}/10</span>
                        <span id='r'>{DataOmdb.Year}</span>
                        <span id='r'>{DataOmdb.Runtime}</span>

                        </p>
                        <p>{dataInfo.overview}</p>
                        <hr />
                        <p><strong>Release :</strong> {DataOmdb.Released}</p>
                        <p><strong>Nombre de saison :</strong> {dataInfo.number_of_seasons}</p>
                        <p><strong>Genre :</strong> {DataOmdb.Genre}</p>
                        <p><strong>Type :</strong> {dataInfo.type}</p>
                        <p><strong>Actor : </strong>{DataOmdb.Actors}</p>

                        <button className='addToInfoList' onClick={addFavorit}>Add to InfoList</button>
                    </div>
                </div>
                }
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

                {ongletActor === "Cast" && dataActors.length > 0 &&
                    <Carousel3 actorCarousel={dataActors}/>
                }

                {ongletActor === "Crew" && dataCrew.length > 0 &&
                    <Carousel3 actorCarousel={dataCrew} />
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
                            dataVideos.slice(0, 10).map((video, key) => (
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
                <Carousel1 movieCarousel={dataRecommendation} type={type} />
            </div>

        </div>
    );
}
export default DetailMovie;