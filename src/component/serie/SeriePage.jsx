import React from 'react';
import "./SeriePage.css";
import MovieCard2 from '../movieCard/MovieCard2';
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import UseSeriePage from './UseSeriePage';
import useUtils from '../utils/useUtils';
import { troubleShoot } from '../utils/useUtils';
import useMoviePage from '../movie/useMoviePage';
                    
export default function SeriePage() {
    const {serieFindByFiltre,page, maxPage, serieRate, genresTv, imageFiltre,  setPage, setMovieRate,  handleCheckCheckbox, handlefiltre, handleResetfiltre} = UseSeriePage();
    const {handleDisplayGenre} = useMoviePage();
    const {handleDetail} = useUtils();
    
    console.log("series: ", serieFindByFiltre)
    if (!serieRate) return <p>Chargement des film ....</p>

    troubleShoot();

    return (
        <div className='serie-container'>

            <div className='wrapper-main'>
                <div className="wrapper">
                    <div className="bg"> Series </div>
                    <div className="fg"> Series </div>
                </div>
            </div>

            <div className="content-filter" style={{color: localStorage.getItem("Title-Colors")}}>
                <div className="filters">
                    <a onClick={() => setMovieRate('now_playing')}>now_playing</a>
                    <a onClick={() => setMovieRate('trending')}>trending</a> 
                    <a onClick={() => setMovieRate('top_rated')}>top_rated</a> 

                </div>
                
                <a id='genre' onClick={handleDisplayGenre}>Genre <span style={{paddingLeft:"4px"}}>{imageFiltre}</span></a>

            </div>

            <div className="filter-genre" id='filter-genre' style={{display:"none"}}>
                    <form>
                        {                            
                            genresTv && genresTv.map((genre) => (
                                <div key={genre.id}>
                                    <label id='container' onClick={(e) => e.currentTarget.style.color = e.currentTarget.style.color === "rgb(95, 94, 94)" ? localStorage.getItem("Title-Colors") : "rgb(95, 94, 94)"}>
                                    <input id={genre.id}  onChange={() => handleCheckCheckbox(genre.id)} type="checkbox" />
                                    <span>{genre.name}</span>
                                    </label>
                                </div>
                            ))    
                        }
                    </form>
                    <button id='confirmGenreBtn' onClick={handlefiltre}>Appliquer</button>   
                    <button onClick={handleResetfiltre}>Reset</button>   
                </div>
            <div className="content">
                {
                    serieFindByFiltre.length > 0 ?
                    serieFindByFiltre.map((serie) => (
                            <div key={serie.id} onClick={() => handleDetail("tv", serie.id, serie.title)}>
                                <MovieCard2
                                    url={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} 
                                    title={serie.original_name} 
                                    type="TV"
                                    rate={serie.vote_average.toFixed(1)}
                                    year={serie.first_air_date.split('-')[0]}
                                    language={serie.original_language}
                                /> 
                            </div>
                        )) 
                        :
                        serieRate.map((serie) => (
                            <div key={serie.id} onClick={() => handleDetail("tv", serie.id, serie.title)}>
                                <MovieCard2 
                                    url={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} 
                                    title={serie.original_name} 
                                    type="TV"
                                    rate={serie.vote_average.toFixed(1)}
                                    year={serie.first_air_date.split('-')[0]}
                                    language={serie.original_language}
                                /> 
                            </div>
                        ))
                }
            </div>
            <div className='pagination-box'>
                    <div className="pagination">
                        <FaRegArrowAltCircleLeft id='left' style={{ color: localStorage.getItem("Title-Colors") }}
                            onClick={page > 1 ? () => setPage(page - 1) : () => setPage(1)} />
                
                        <h2>{page}/{maxPage}</h2>
                
                        <FaRegArrowAltCircleRight id='right' style={{ color: localStorage.getItem("Title-Colors") }}
                            onClick={page <= maxPage ? () => setPage(page + 1) : () => setPage(maxPage)} />
                    </div>
                </div>
        </div>
    );
}
