import 'react'
import './Home.css';
import MovieAvatar from '/src/assets/avatar.png';
import MovieThor from '/src/assets/thor.jpg';
import MovieAddam from '/src/assets/blackaddam.jpg';
import MovieSpider from '/src/assets/spiderman.jpg';
import MovieScream from '/src/assets/scream.jpg';
import MovieSuperman from '/src/assets/superman.jpg';
import MovieOppenhein from '/src/assets/oppenhaimer.jpg';
import MovieFreeGuy from '/src/assets/freeguy.jpg';
import MovieDeadpool from '/src/assets/deadpool.jpg';
import MovieCard from '../MovieCard';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const moviesRecent = [
    { id: 10, title: "Scream VI", image: MovieScream },
    { id: 11, title: "Spider-Man", image: MovieSpider },
    { id: 12, title: "Superman", image: MovieSuperman },
    { id: 13, title: "Thor", image: MovieThor },
]

const moviestrending = [
    { id: 3, title: "Avatar", image: MovieAvatar },
    { id: 5, title: "Deadpool", image: MovieDeadpool },
    { id: 6, title: "Free Guy", image: MovieFreeGuy },
    { id: 8, title: "Oppenheimer", image: MovieOppenhein },
    { id: 10, title: "Scream VI", image: MovieScream },
    { id: 11, title: "Spider-Man", image: MovieSpider },
    { id: 12, title: "Superman", image: MovieSuperman },
    { id: 13, title: "Thor", image: MovieThor },
]

const API_KEY = "a34708ad"; 
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Home() {
    const [movies, setMovies] = useState(moviesRecent);
    // const moviesRecent = movies.filter((movie) => movie.Year >= 2024)
    // const moviesTrending = movies.filter((movie) => movie.Metascore >== 80)
    const navigate = useNavigate()

    const handleDetail = (title) => {
    navigate(`/detail/${title}`);
    };

    const searchMovies = async () => {
            const response = await fetch(`${API_URL}&s=$test`);
            const data = await response.json();
            setMovies(data.Search || []);
    };

    useEffect(() => {
        searchMovies();
    }, []);


    return (
        
        <div className="containerHome">
            
                {/*/////////////// Caroussel */}
                <div className="carouselBox">   
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={MovieAddam} alt="avatar" className="carousel-img"/>
                        </div>
                        {
                            moviesRecent.map((movie, key) => (
                                <div onClick={() => handleDetail(movie.id)} key={key} class="carousel-item">
                                    <img src={movie.image} alt="avatar" className="carousel-img"/>
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
            </div>
            
            <hr />
            <h3 style={{float:"left"}}>Trending Movie</h3>
                <div className="containerTrending">
                    
                    <button className="arrow arrow-left">‹</button>
                    <div className="trending">
                        {/* <MovieCard url={MovieAddam} title="Black Adam"/>  */}
                        {
                            moviestrending.map((movie, key) => (
                                <p onClick={() => handleDetail(movie.id)}><MovieCard key={key} url={movie.image} title={movie.title}/></p>
                            ))
                        }
                    </div>
                    <button className="arrow arrow-right">›</button>
                </div>

                <hr />
                <h3 style={{float:"left"}}>Latest Movie</h3>
                <div className="containerTrending">
                    <button className="arrow arrow-left">‹</button>
                    <div className="trending">
                        {/* <MovieCard url={MovieAddam} title="Black Adam"/>  */}
                        {
                            moviesRecent.map((movie, key) => (
                                <p onClick={() => handleDetail(movie.id)}><MovieCard key={key} url={movie.image} title={movie.title}/></p>
                            ))
                        }
                    </div>
                    <button className="arrow arrow-right">›</button>
                </div>
        </div>
        
        
    );
}

export default Home;



