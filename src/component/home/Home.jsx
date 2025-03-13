import 'react'
import './Home.css';

import MovieAddam from '/src/assets/blackaddam.jpg';

import MovieCard from '../movieCard/MovieCard';
import VideoBackground from '/src/assets/video1.mp4';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Test from '../movieCard/Test';
import MainMovieCard from '../movieCard/MainMovieCard';



// const API_KEY = "a34708ad"; 
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

// nouvelle api TMDB
const API_KEY = "bbe34269651625cd81a39afd38610700"; 
const API_URL_A_l_AFFICHE = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=`;
const API_URL_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`;
const API_URL_TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=`;

function Home() {
    //   const moviesRecent = movies.filter((movie) => movie.Year >= 2024)
    const [moviesRecent, setMoviesMoviesRecent] = useState([])
    const [moviesTopRated, setMoviesTopRated] = useState([])
    const [moviesTrending, setMoviesTrending] = useState([])
    const navigate = useNavigate()

    const handleDetail = (id,title) => {
        navigate(`/detail/${id}/${title}`);
    };

    const searchMoviesRecent = async () => {
        const response = await fetch(`${API_URL_A_l_AFFICHE}${1}`);
        const data = await response.json();
        setMoviesMoviesRecent(data.results || []);
    };

    const searchMoviesTopRated = async () => {
        const response = await fetch(`${API_URL_TOP_RATED}${3}`);
        const data = await response.json();
        setMoviesTopRated(data.results || []);
    };

    const searchTrendingMovie = async () => {
        const response = await fetch(`${API_URL_TRENDING}${1}`);
        const data = await response.json();
        setMoviesTrending(data.results || []);
    };

    useEffect(() => {
        searchMoviesRecent()
        searchTrendingMovie();
        searchMoviesTopRated()
    }, []);


    return (
        
        <div className="containerHome">
            {/* <div className="carouselBox">   
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={MovieAddam} alt="black Adam" className="carousel-img"/> 
                            <Test url={MovieAddam} title="Black Adam"/>

                        </div>
                        {
                            moviesRecent.map((movie, key) => (
                                <div onClick={() => handleDetail(movie.id, movie.title)} key={key} class="carousel-item">
                                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}  alt={movie.title} className="carousel-img"/> 
                                    <Test url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} title={movie.title} plot={movie.overview}/>
                                    
                                </div>
                            ))
                        }
                    </div>



                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>  */}

            <div className="content-main-movie">
                {
                    moviesRecent.map((movie, key) => (
                        <div onClick={() => handleDetail(movie.id, movie.title)} key={key}>
                            <MainMovieCard url={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} title={movie.title} plot={movie.overview} lang={movie.original_language} year={movie.release_date.split('-')[0]}/>
                        </div>
                    ))
                }
            </div>
            
            
            <hr />
            <h3 style={{float:"left"}}>Top rated Movie</h3>
                <div className="containerTrending">
                    <div className="trending">
                        {
                            moviesTopRated.map((movie, key) => (
                                <p key={key} onClick={() => handleDetail(movie.id, movie.title) }>
                                    <MovieCard url={movie.image || `https://image.tmdb.org/t/p/w200/${movie.poster_path}`} title={movie.title} />
                                </p>
                            ))
                        }
                    </div>
                </div>

                <h3 style={{float:"left"}}>Trending Movie</h3>
                <div className="containerTrending">
                    <div className="trending">
                        {
                            moviesTrending.map((movie, key) => (
                                <p key={key} onClick={() => handleDetail(movie.id ,movie.title) }>
                                    <MovieCard url={movie.image || `https://image.tmdb.org/t/p/w200/${movie.poster_path}`} title={movie.title} />
                                </p>
                            ))
                        }
                    </div>
                </div>

                <hr />
                
        </div>
        
        
    );
}

export default Home;



