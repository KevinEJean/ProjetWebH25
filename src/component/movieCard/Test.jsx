import React from 'react';
import './Test.css'
import MovieAddam from '/src/assets/blackaddam.jpg';

function Test(props) {
    return (
        <div>
            <div className='container-info-carousel'>
            <div className="title_wrapper">
                    <h1 className="has-text-white">{props.title}</h1>
                    <hr />
                    {/* <p className="title is-1 has-text-white">{props.plot}</p> */}
                </div>
                <div>
                    <img src={props.url} className="featured"/>
                </div>
            </div>
        </div>
    );
}

export default Test;