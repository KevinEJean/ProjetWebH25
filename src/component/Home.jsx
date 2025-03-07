import 'react'
import './Home.css';
import MovieAvatar from '../assets/avatar.png';
import MovieThor from '../assets/thor.jpg';
import MovieAddam from '../assets/blackaddam.jpg';
import MovieSpider from '../assets/spiderman.jpg';
import MovieScream from '../assets/scream.jpg';
import MovieSuperman from '../assets/superman.jpg';
import MovieOppenhein from '../assets/oppenhaimer.jpg';
import MovieFreeGuy from '../assets/freeguy.jpg';
import MovieDeadpool from '../assets/deadpool.jpg';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';


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


// { id: 3, title: "Avatar", image: MovieAvatar },
// { id: 5, title: "Deadpool", image: MovieDeadpool },
// { id: 6, title: "Free Guy", image: MovieFreeGuy },
// { id: 8, title: "Oppenheimer", image: MovieOppenheim },
// { id: 10, title: "Scream VI", image: MovieScream },
// { id: 11, title: "Spider-Man", image: MovieSpider },
// { id: 12, title: "Superman", image: MovieSuperman },
// { id: 13, title: "Thor", image: MovieThor },

function Home() {
    const navigate = useNavigate()
    const handleDetail = (id) => {
        navigate(`/detail/${id}`);
    }

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



