import 'react';
import './Home.css';
import Carousel1 from '../movieCard/carousel/Carousel1';
import Carousel2 from '../movieCard/carousel/Carousel2';
import useHome from './useHome';

function Home() {
    const { moviesRecent, moviesTopRated, moviesTrending, moviesPopular, moviesUpcoming, seriePopular, serieTopRated, serieTrending } = useHome();

    const sections = [
        { title: "Top Rated Movie", data: moviesTopRated, type:"movie"},
        { title: "Trending Movie", data: moviesTrending, type:"movie" },
        { title: "Popular Movie", data: moviesPopular, type:"movie" },
        { title: "Upcoming Movie", data: moviesUpcoming, type:"movie" },
        { title: "Popular TV", data: seriePopular, type:"tv" },
        { title: "Top Rated TV", data: serieTopRated, type:"tv" },
        { title: "Trending TV", data: serieTrending, type:"tv" },
    ];

    return (
        <div className="container-home-page">
            <Carousel2 movieRecent={moviesRecent} type={"movie"} /> 

            <hr style={{color: localStorage.getItem("Title-Colors")}}/>
            
            {
            sections.map((section, index) => (
                <div key={index}>
                    <div className="wrapper">
                        <div className="bg"> {section.title} </div>
                        <div className="fg"> {section.title} </div>
                    </div>
                    <div className="container-movie">
                        <div className="movies">
                            <Carousel1 movieCarousel={section.data} type={section.type}/>
                        </div>
                    </div>
                    <hr style={{color: localStorage.getItem("Title-Colors")}}/>
                </div>
            ))}
        </div>
    );
}

export default Home;