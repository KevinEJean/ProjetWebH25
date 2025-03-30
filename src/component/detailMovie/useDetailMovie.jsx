import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
////// Api de OMDB pour récupération des info/////////////////////////
const API_KEY_OMDB = "a34708ad"; 
const API_URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

///// Api recommendation TMDB pour les film recommandé //////////////////
const API_KEY_TMDB = "bbe34269651625cd81a39afd38610700"; 
// const API_URL_TMDB_RECOMMENDATIONS = `https://api.themoviedb.org/3/movie/movie_id/recommendations?api_key=${API_KEY_TMDB}&page=1`;
// const API_URL_FIND_ACTOR = `https://api.themoviedb.org/3/search/person?api_key=bbe34269651625cd81a39afd38610700&query=`;


//  ##########################################################################################################################
// ############# Hook personnalisé on va développer tout nos fonction ici et l'envoyer de l'autre coté #############################

function useDetailMovie() {
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
    
    return {
        id,
        title,
        movieOmdb,
        setMovieOmdb,
        movieRecommendation,
        setMovieRecommendation,
        ongletActif,
        setOngletActif,
        ongletActor,
        setOngletActor,
        ongletMedia,
        setOngletMedia,
        movieActors,
        setMovieActor,
        movieCrew,
        setMovieCrew,
        movieImages,
        setMovieImages,
        movieVideos,
        setMovieVideos
    }
}

export default useDetailMovie;