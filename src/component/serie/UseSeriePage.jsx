import { useState, useEffect } from 'react';

// URL POUR LES REQUÊTES API
const API_KEY = "bbe34269651625cd81a39afd38610700"; 

const imageFiltre = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
    </svg>

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


    const searchSerieByRate = async () => {
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

    const handlefiltre = () => {
        setfiltre(preFiltre);
        let displayType = document.getElementById('filter-genre');
        displayType.style.display = "none";
    }

    const handleResetfiltre = () => {
        setfiltre([]);
        let displayType = document.getElementById('filter-genre');
        displayType.style.display = "none";
        document.querySelectorAll('.filter-genre input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        });
    }

    function handleCheckCheckbox(id) {
        var checkbox = document.getElementById(id);
      
        if (checkbox.checked) {
          document.getElementById(id).style.backgroundColor = "gold"
          if (!preFiltre.includes(id)) {
            setPreFiltre(prev => [...prev, id])
          }
        } else {
          if (preFiltre.includes(id)) {
            setPreFiltre(prev => prev.filter(genre => genre !== id))
          }
        }   
      }


    const searchMoviesByGenre = async (filtre) => {
        if (filtre.length === 0) return searchSerieByRate(serieRate,page);

        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${filtre}&page=${page}`);
        const data = await response.json();
        setSerieFindByFiltre(data.results || []);
        setMaxPage(data.total_pages);
    };
    
    useEffect(() => {
        searchMoviesByGenre(filtre)
    }, [filtre,movieRate,page]);
    
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
