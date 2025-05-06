import { useState, useEffect } from 'react';

const API_KEY = "bbe34269651625cd81a39afd38610700"; 
const API_URL_BY_RATE = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=`;

const imageFiltre = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16"> <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/></svg>

const genresMovie = [ 
    {name: "Action", id:28}, {name:"Adventure", id:12}, {name:"Animation", id:16},
    {name:"Comedy", id:35}, {name:"Crime", id:80}, {name:"Documentary", id:99},
    {name:"Drama" ,id:18}, {name:"Family" , id:10751}, {name:"Fantasy", id:14}, 
    {name:"History", id:36}, {name:"Horror" , id:27}, {name:"Music", id:10402},
    {name:"Mystery", id:9648}, {name:"Romance", id:10749}, {name:"Science Fiction", id:878},
    {name:"Thriller", id:53}, {name:"War", id:10752}, {name:"Western", id:37}
]

export default function useMoviePage() {
    const [movieRate, setMovieRate] = useState('now_playing')
    const [filtre, setfiltre] = useState([]);
    const [preFiltre, setPreFiltre] = useState([])
    const [moviesTrending, setMoviesTrending] = useState([]);
    const [movieFindByFiltre, setMovieFindByFiltre] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1)

    
    const handleDisplayGenre = () => {
        let displayType = document.getElementById('filter-genre');
        
        if (displayType.style.display === "none") {
            displayType.style.display = "block";
        } else {
            displayType.style.display = "none";
        }
    }

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


    const searchMovieByRate = async (movieRate,page) => {
        let response = null;
    
        if (movieRate === "trending") {
            response = await fetch(`${API_URL_BY_RATE}${page}`)
        } else {
            response = await fetch(`${`https://api.themoviedb.org/3/movie/${movieRate}?api_key=${API_KEY}&page=`}${page}`)
        }
        const data = await response.json();
        setMoviesTrending(data.results || []);
        setMaxPage(data.total_pages)
    };
    
    const searchMoviesByGenre = async (filtre) => {
        if (filtre.length === 0) return searchMovieByRate(movieRate,page);
        
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${filtre}&page=${page}`);
        const data = await response.json();
        setMovieFindByFiltre(data.results || []);
        setMaxPage(data.total_pages);
    };
    
       
    useEffect(() => {
        searchMoviesByGenre(filtre)
    }, [filtre,movieRate,page]);

    
    return {
        movieRate, 
        filtre,
        setMovieRate, 
        moviesTrending,
        movieFindByFiltre,
        page,
        genresMovie,
        imageFiltre,
        setPage,
        maxPage, 
        setMaxPage,
        handleDisplayGenre, 
        handleCheckCheckbox,
        handlefiltre,
        handleResetfiltre
    };
    
}
