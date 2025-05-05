import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

////// Api de OMDB pour récupération des info/////////////////////////
const API_KEY_OMDB = "a34708ad"; 
const API_URL_OMDB = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}`;

///// Api recommendation TMDB pour les film recommandé //////////////////
const API_KEY_TMDB = "bbe34269651625cd81a39afd38610700"; 

function useDetailMovie() {
    const {type, id, title } = useParams();
    const [DataOmdb, setDataOmdb] = useState(null);  
    const [dataPosterTmdb, setDataPosterTmdb] = useState(null);  
    const [dataRecommendation, setDataRecommendation] = useState(null)
    const [ongletActor, setOngletActor] = useState("Cast");
    const [ongletMedia, setOngletMedia] = useState("Videos");
    const [dataActors, setMovieActor] = useState(null)
    const [dataCrew, setDataCrew] = useState(null)
    const [dataImages, setDataImages] = useState(null)
    const [dataVideos, setDataVideos] = useState(null)
    const [dataInfo, setDataInfo] = useState(null)
    
        const searchDataOmdb = async () => {
            const response = await fetch(`${API_URL_OMDB}&t=${title}`); 
            const data = await response.json();
            setDataOmdb(data || []);
        };
    
        const searchDataPoster = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            setDataPosterTmdb(data || []);
        };  

        const searchDataInfo = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            setDataInfo(data || []);
        };  

        const searchDataRecommendations = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY_TMDB}&page=1`); 
            const data = await response.json();
            setDataRecommendation(data.results || []);
        };
    
        const searchDataActor = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            setMovieActor(data.cast || []);
        };
        const searchDataCrew = async () => {
                const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY_TMDB}`); 
                const data = await response.json();
                setDataCrew(data.crew || []);
        };
        const searchDataVideo = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            setDataVideos(data.results || []);
        };
        const searchDataImage = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=${API_KEY_TMDB}`); 
            const data = await response.json();
            setDataImages(data  || []);
        };
    
        useEffect(() => {
            if (id,title) {
                searchDataOmdb(); 
                searchDataInfo();
                searchDataRecommendations();
                searchDataActor();
                searchDataCrew();
                searchDataVideo();
                searchDataImage();
                searchDataPoster()
            }
        }, [id,title]);
    
    return {
        id,
        type,
        title,
        dataInfo,
        DataOmdb,
        setDataOmdb,
        dataRecommendation,
        setDataRecommendation,
        dataPosterTmdb,
        ongletActor,
        setOngletActor,
        ongletMedia,
        setOngletMedia,
        dataActors,
        setMovieActor,
        dataCrew,
        setDataCrew,
        dataImages,
        setDataImages,
        dataVideos,
        setDataVideos
    }
}

export function blankAvatarStyler() {
    var allImages = document.getElementsByTagName("img");
    for (let i = 0; i < allImages.length; i++) {
        if (allImages[i].src == "http://localhost/src/assets/stockAvatar.jpg") {    
            console.log(allImages[i].alt);
        }
    }
}

export default useDetailMovie;