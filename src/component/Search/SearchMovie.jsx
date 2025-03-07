import React, { useEffect, useState } from 'react';
import './SearchMovie.css';
import MovieCard from '../MovieCard';
import { useNavigate } from 'react-router-dom';


const API_KEY = "a34708ad"; 
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function SearchMovie() {
    const [inputCritere, setInputCritere] = useState('');
    const [critereMovie, setCritereMovie] = useState('');
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate()


    const handlecritere = () => {
        console.log("Critere: ", inputCritere);
        setCritereMovie(inputCritere);
        setInputCritere("");
    }

    const handleDetail = (title) => {
        navigate(`/detail/${title}`);
    }

    const searchMovies = async () => {
        if (critereMovie) {
            const response = await fetch(`${API_URL}&s=${critereMovie}`);
            const data = await response.json();
            setMovies(data.Search);
        } else {
            setMovies([])
        }
      }

      useEffect(() => {
        if (critereMovie) {
            searchMovies();
        }
      }, [critereMovie]);

      
//  if (!movies || movies.length === 0) {
//     return (
//         <div className="containerSearch">
//             <div className="searchBar">
//                 <input 
//                     type="text" 
//                     className="searchTerm" 
//                     value={inputCritere} 
//                     placeholder="Search by title, genre, year" 
//                     onChange={(e) => setInputCritere(e.target.value)} 
//                 />
//                 <button onClick={handlecritere} type="submit" className="searchButton">
//                     <i className="fa fa-search"></i>
//                 </button>
//             </div>
//             <p>Aucun résultat trouvé...</p>
//         </div>  
//     );
// }


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
                        movies.length > 0 ? 
                        
                        movies.map((movie, key) => (
                            <p key={key}  onClick={() => handleDetail(movie.Title)}><MovieCard url={movie.Poster} title={movie.Title}/></p>
                        )) 
                        :
                        <h3>Aucun résultat trouvé</h3>
                    }
                </div>
        </div>
    );
}

export default SearchMovie;