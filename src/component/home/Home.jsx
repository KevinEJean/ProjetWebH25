import 'react';
import './Home.css';
import Carousel1 from '../movieCard/carousel/Carousel1';
import Carousel2 from '../movieCard/carousel/Carousel2';
import useHome from './useHome';
import Carousel3 from '../movieCard/carousel/Carousel3';

function Home() {
    const { moviesRecent, moviesTopRated, moviesTrending, moviesPopular, moviesUpcoming, seriePopular, serieTopRated, serieTrending } = useHome();

    const sections = [
        { title: "Top Rated Movie", data: moviesTopRated },
        { title: "Trending Movie", data: moviesTrending },
        { title: "Popular Movie", data: moviesPopular },
        { title: "Upcoming Movie", data: moviesUpcoming },
        { title: "Popular TV", data: seriePopular },
        { title: "Top Rated TV", data: serieTopRated },
        { title: "Trending TV", data: serieTrending },
    ];

    return (
        <div className="containerHome">
            <Carousel2 movieRecent={moviesRecent} /> 

            <hr />
            
            {sections.map((section, index) => (
                <div key={index} className=''>
                    {/* <h3 className='rate' style={{ float: "left" }}>{section.title}</h3> */}
                    <div class="wrapper">
                    <div class="bg"> {section.title} </div>
                    <div class="fg"> {section.title} </div>
                    </div>
                    <div className="containerTrending">
                        <div className="trending">
                            <Carousel1 movieCarousel={section.data} />
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Home;
