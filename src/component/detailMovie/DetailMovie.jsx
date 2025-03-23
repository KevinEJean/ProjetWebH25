import React, { useEffect, useRef, useState } from 'react';
import './DetailMovie.css';
import { useNavigate, useParams } from 'react-router-dom';
// import blackAdam from '/src/assets/blackaddam.jpg';
import MovieCard from '../movieCard/MovieCard';


////// Api de OMDB pour récupération des info/////////////////////////
const API_KEY_OMDB = "a34708ad"; 
const API_URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

///// Api recommendation TMDB pour les film recommandé //////////////////
const API_KEY_TMDB = "bbe34269651625cd81a39afd38610700"; 
// const API_URL_TMDB_RECOMMENDATIONS = `https://api.themoviedb.org/3/movie/movie_id/recommendations?api_key=${API_KEY_TMDB}&page=1`;
// const API_URL_FIND_ACTOR = `https://api.themoviedb.org/3/search/person?api_key=bbe34269651625cd81a39afd38610700&query=`;


function DetailMovie() {
    const { id,title } = useParams();
    const [movieOmdb, setMovieOmdb] = useState(null);  
    const [movieRecommendation, setMovieRecommendation] = useState(null)
    const [ongletActif, setOngletActif] = useState("Info");
    const [ongletActor, setOngletActor] = useState("Cast");
    const [ongletMedia, setOngletMedia] = useState("Videos");
    const [movieActors, setMovieActor] = useState(null)
    const [movieCrew, setMovieCrew] = useState(null)
    const [movieImages, setMovieImages] = useState(null)
    const [movieVideos, setMovieVideos] = useState(null)
    const navigate = useNavigate();


    //  reload la page quand elle est ouvert (bug fix)
    var count = true;
    window.onload = function () {
        if (count) {
            count = false;
            window.location.reload();
        }
    }

    const handleDetail = (id,title) => {
        navigate(`/detail/${id}/${title}`);
    };

    //// -> cette fonction va trouver un seul et unique film dépendament du titre
    const searchMoviesOmdb = async () => {
        if (title) {
            const response = await fetch(`${API_URL_OMDB}&t=${title}`); 
            const data = await response.json();
            console.log("info Omdbc:",data)
            setMovieOmdb(data || []);
        }
    };

    const searchMovieRecommendations = async () => {
        // if (movieId) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY_TMDB}&page=1`); 
            // const response = await fetch(API_URL_TMDB_RECOMMENDATIONS.replace("{movie_id}", title)); 
            const data = await response.json();
            console.log("Recommandations TMDB: ", data);
            setMovieRecommendation(data.results || []);
        // }
    };

    const searchMovieActor = async () => {
        // if (movieId) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            console.log("movie Actor: ", data);
            setMovieActor(data.cast || []);
        // }
    };
    const searchMovieCrew = async () => {
        // if (movieId) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            console.log("movie Crew: ", data);
            setMovieCrew(data.crew || []);
        // }
    };
    const searchMovieVideo = async () => {
        // if (movieId) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            console.log("movie Video: ", data);
            setMovieVideos(data.results || []);
        // }
    };
    const searchMovieImage = async () => {
        // if (movieId) {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            console.log("movie Images: ", data);
            setMovieImages(data  || []); 
        // }
    };


    useEffect(() => {
        if (id,title) {
            searchMoviesOmdb(); 
            searchMovieRecommendations();
            searchMovieActor();
            searchMovieCrew();
            searchMovieVideo();
            searchMovieImage();
        }
    }, [id,title]);


    if (!movieOmdb) return <p>Film information is loading...</p>;
    if (!movieRecommendation) return <p>Movie recommendations are loading...</p>;
    if (!movieActors) return <p>Actors information is loading...</p>;

    return (
        <div className="container-detail">

                <div className="movie-detail">

                {/*///////// Movie Info////////////////////////////////////////////// */}

                <div className="movie-image">
                    <img src={movieOmdb.Poster} alt={movieOmdb.Title}/>
                    {/* <img src={movieOmdb.Poster} alt={movieOmdb.Title}/> */}
                </div>
                <div className="movie-info">
                    <div className="nav">
                        <a onClick={() => setOngletActif("Info")}>Info</a>
                        <a onClick={() => setOngletActif("Cast")}>Casts</a>
                    </div>
                    {ongletActif === "Info" ? (
                        <div className="content-info">
                            <h1 style={{textShadow:"2px 2px black"}}>{movieOmdb.Title}</h1>
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
                            <hr />
                            <strong>Details:</strong>
                            <ul>
                                <li><strong>Production:</strong> {movieOmdb.Production}</li>
                                <li><strong>Language:</strong> {movieOmdb.Language}</li>
                                <li><strong>Country:</strong> {movieOmdb.Country}</li>
                                <li><strong>Awards :</strong> {movieOmdb.Awards}</li>
                                <li><strong>Box Office :</strong> {movieOmdb.BoxOffice}</li>
                                <li><strong>DVD :</strong> {movieOmdb.DVD}</li>
                            </ul>
                        </div>
                    ) : (
                        <div className="content-actor2">
                            {/* <h1>Actor</h1> */}
                            {
                                movieActors.length > 0 ? 
                                movieActors.map((actor, key) => (
                                    <div className='card-actor2' key={key}>
                                        <img 
                                        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} 
                                        alt={actor.name} 
                                        />
                                        <div className="info">
                                            <strong>{actor.name}</strong>
                                            <p>{actor.character}</p>
                                        </div>
                                    </div>
                                ))
                                : 
                                <h1>Aucun élément</h1>
                            } 
                        </div>
                    )}
                </div>
            </div>
            <hr />

            {/*///////// Actor Info////////////////////////////////////////////// */}

            <div className="container-nav-media">
                <h3>Tête d'affiche </h3>
                <div className="nav-media">
                    <a onClick={() => setOngletActor("Cast")}>Cast</a>
                    <a onClick={() => setOngletActor("Crew")}>Crew</a>
                </div>
            </div>
            <div className="content-actor">
                {
                    ongletActor === "Cast" && movieActors.length > 0 && 
                    movieActors.map((actor, key) => (
                        <div className='card-actor' key={key}>
                        <img 
                        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} 
                        alt={actor.name} 
                        />
                        <strong>{actor.name}</strong>
                        <p>{actor.character}</p>
                        </div>
                    ))
                }
                
                {
                    ongletActor === "Crew" && movieCrew.length > 0 && 
                    movieCrew.map((crew, key) => (
                        <div className='card-actor' key={key}>
                        <img 
                        src={`https://image.tmdb.org/t/p/w200/${crew.profile_path}`} 
                        alt={crew.name} 
                        />
                        <strong>{crew.name}</strong>
                        <p>{crew.character}</p>
                        </div>
                    ))
                    // : 
                    // <h1>Aucun Crew trouvé</h1>
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
                                movieVideos.slice(0,5).map((video, key) => (
                                    <iframe key={key} width="560" height="315" 
                                    src={`https://www.youtube.com/embed/${video.key}`} 
                                    title="YouTube video player" frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen>
                                    </iframe>
                                ))
                            } 
                        </div>

                }
                {
                   ongletMedia === "Posters" && movieImages.posters.map((image, key) => (
                    <img key={key}
                        src={`https://image.tmdb.org/t/p/w200/${image.file_path}`} 
                        
                        />
                )) 
                }
                {
                   ongletMedia === "Backdrops" && movieImages.backdrops.map((image, key) => (
                    <img key={key}
                        src={`https://image.tmdb.org/t/p/w200/${image.file_path}`} 
                        
                        />
                )) 
                }
               
            </div>

            <hr />

            {/*///////// Film recommendé////////////////////////////////////////////// */}

            <h3>Titre similaire</h3>
            <div className="recommandations">
                {movieRecommendation.length > 0 ? 
                    movieRecommendation.map((movie, key) => (
                        <p key={key} onClick={() => handleDetail(movie.id, movie.title)}>
                            <MovieCard 
                            url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                            title={movie.title} 
                        />
                        </p>
                    )) : (
                        <p>Aucune recommandation disponible</p>
                    )
                }
            </div>
            
        </div>
    );
}

export default DetailMovie;
