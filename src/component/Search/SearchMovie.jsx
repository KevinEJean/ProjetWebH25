import React, { useState } from 'react';
import './SearchMovie.css';
import MovieCard from '../MovieCard';
import { data, useNavigate } from 'react-router-dom';

import MovieAvatar from '../../assets/avatar.png';
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


function SearchMovie() {
    const [inputCritere, setInputCritere] = useState('');
    const [critereMovie, setCritereMovie] = useState('');

    const handlecritere = () => {
        console.log("Critere: ", inputCritere);
        setCritereMovie(inputCritere);
        setInputCritere("");
    }

    const navigate = useNavigate()
    const handleDetail = (id) => {
        navigate(`/detail/${id}`);
    }


    const movieFilter = moviesRecent.filter((movie) => (
        movie.title.toLocaleLowerCase().startsWith(critereMovie.toLocaleLowerCase())
    ))
    return (
        <div className='containerSearch'>
                <div class="searchBar">
                    <input type="text" class="searchTerm" value={inputCritere} placeholder="Search by title, genre, year" onChange={(e) => setInputCritere(e.target.value)}/>
                    
                    <button onClick={handlecritere} type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>

                <hr />
                <div className="searchResult">
                    {
                        movieFilter.length > 0 ? 
                        
                        movieFilter.map((movie, key) => (
                            <p  onClick={() => handleDetail(movie.id)}><MovieCard key={key} url={movie.image} title={movie.title}/></p>
                        )) 
                        :
                        <h3>Aucun résultat trouvé</h3>
                    }
                </div>
        </div>
    );
}

export default SearchMovie;