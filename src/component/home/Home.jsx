import 'react'
import './Home.css';
import Carousel1 from '../movieCard/carousel/Carousel1';
import Carousel2 from '../movieCard/carousel/Carousel2';
import useHome from './useHome';

// a voir si possible de map tout ces élément
function Home() {
    const {moviesRecent, moviesTopRated, moviesTrending, moviesPopular, moviesUpcoming, seriePopular, serieTopRated, serieTrending} = useHome();

    return (
        
        <div className="containerHome">

            <Carousel2 movieRecent={moviesRecent} actorCarousel={null}/> 
                
            
            <hr />
            <h3 style={{float:"left"}}>Top rated Movie</h3>
            <div className="containerTrending">
                <div className="trending">
                    <Carousel1 movieCarousel={moviesTopRated} actorCarousel={null}/>
                </div>
            </div>

            <h3 style={{float:"left"}}>Trending Movie</h3>
            <div className="containerTrending">
                <div className="trending">
                    <Carousel1 movieCarousel={moviesTrending} actorCarousel={null}/>
                </div>
            </div>
            <hr />

            <h3 style={{float:"left"}}>Popular Movie</h3>
            <div className="containerTrending">
                <div className="trending">
                    <Carousel1 movieCarousel={moviesPopular } actorCarousel={null}/>
                </div>
            </div>
            <hr />

            <h3 style={{float:"left"}}>Upcoming Movie</h3>
            <div className="containerTrending">
                <div className="trending">
                    <Carousel1 movieCarousel={moviesUpcoming } actorCarousel={null}/>
                </div>
            </div>
            <hr />

            <h3 style={{float:"left"}}>Popular tv</h3>
            <div className="containerTrending">
                <div className="trending">
                    <Carousel1 movieCarousel={seriePopular} actorCarousel={null}/>
                </div>
            </div>
            <hr />

            <h3 style={{float:"left"}}>Top Rated tv</h3>
            <div className="containerTrending">
                <div className="trending">
                    <Carousel1 movieCarousel={serieTopRated} actorCarousel={null}/>
                </div>
            </div>
            <hr />

            <h3 style={{float:"left"}}>Trending tv</h3>
            <div className="containerTrending">
                <div className="trending">
                    <Carousel1 movieCarousel={serieTrending} actorCarousel={null}/>
                </div>
            </div>
            <hr />

        </div>
    );
}
export default Home;