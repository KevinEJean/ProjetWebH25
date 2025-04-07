import { useState, useEffect } from 'react';
import useMoviePage from '../movie/useMoviePage';

// URL POUR LES REQUÊTES API
// const genres = "28,12";
const API_KEY = "bbe34269651625cd81a39afd38610700"; 
// const API_Genre_Filtre = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres}&page=1`;

const imageFiltre = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
    </svg>

const API_URL_TV_POPULAR = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=`;


const genresTv = [
    {name:"Action & Adventure", id:10759},{name:"Animation ", id:16},{name:"Comedy", id:35},
    {name:"Crime", id:80}, {name:"Documentary", id:99}, {name:"Drama", id:18},
    {name:"Family", id:10751},{name:"Kids", id:10762},{name:"Mystery", id:9648},
    {name:"News", id:10763},{name:"Reality", id:10764},{name:"Sci-Fi & Fantasy", id:10765},
    {name:"Soap", id:10766},{name:"Talk", id:10767},{name:"War & Politics", id:10768},
    {name:"Western", id:37}
]

export default function UseSeriePage() {
    const [movieRate, setMovieRate] = useState('now_playing')
    const [filtre, setfiltre] = useState([]);
    const [preFiltre, setPreFiltre] = useState([])
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1)
    const [serieFindByFiltre, setSerieFindByFiltre] = useState([]);
    const [serieRate, setSerieRate] = useState([])
    // const {handleCheckCheckbox} = useMoviePage()

    const searchMovieOrTvBy = async (url, setter) => {
        const response = await fetch(`${url}${page}`);
        const data = await response.json();
        setter(data.results || []);
        setMaxPage(data.total_pages)
    };

    const searchSerieByRate = async () => {
        // const response = await fetch(`${url}${page}`);
        let response = "";
        if (movieRate === "now_playing") { response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${page}`) } 
        else if (movieRate === "trending") { response = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&page=${page}`) } 
        else if (movieRate === "top_rated") { response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&page=${page}`)}

        const data = await response.json();
        setSerieRate(data.results || []);
        setMaxPage(data.total_pages)
    };


    useEffect(() => {
        searchSerieByRate()
    }, [page, movieRate]);

    // permet de confirmer la rechercher du filtre
    const handlefiltre = () => {
        setfiltre(preFiltre);
        let displayType = document.getElementById('filter-genre');
        displayType.style.display = "none";
    }

    // permet de reset la recherche du filtre
    const handleResetfiltre = () => {
        setfiltre([]);
        let displayType = document.getElementById('filter-genre');
        displayType.style.display = "none";
        document.querySelectorAll('.filter-genre input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        });
    }

    // function me permettant de voir si les checkbox on été checked yes/no
    function handleCheckCheckbox(id) {
        var checkbox = document.getElementById(id);
      
        if (checkbox.checked) {
          console.log(`le genre ${id} à été coché`);
          document.getElementById(id).style.backgroundColor = "gold"
          if (!preFiltre.includes(id)) {
            setPreFiltre(prev => [...prev, id])
          }
        } else {
          console.log(`le genre ${id} à été décoché`);
          if (preFiltre.includes(id)) {
            setPreFiltre(prev => prev.filter(genre => genre !== id))
          }
        }   
      }


    // function me permettant d'aller chercher les film par à traver le filtre
    const searchMoviesByGenre = async (filtre) => {
        if (filtre.length === 0) return searchMovieOrTvBy(API_URL_TV_POPULAR,setSeriePopular);
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${filtre}&page=${page}`);
        // const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${filtre}&page=${page}`);
        const data = await response.json();
        setSerieFindByFiltre(data.results || []);
        setMaxPage(data.total_pages);
    };
    
    useEffect(() => {
        searchMoviesByGenre(filtre)
        // searchMovieByRate(movieRate,page);
    }, [filtre,movieRate,page]);

    console.log("movie filtre trouvé: ", serieFindByFiltre)
    
    return {
        serieRate,
        page,
        genresTv,
        imageFiltre,
        serieFindByFiltre,
        maxPage, 
        setPage,
        setMaxPage,
        setMovieRate, 
        handleCheckCheckbox,
        handlefiltre,
        handleResetfiltre
    };
    
}
