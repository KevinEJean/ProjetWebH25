import 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
    return (
        <div className='nav-grid'>
            <nav>
                <a href="#">LOGO</a>
                <ul class="list">
                    <Link to="/"><li><a href="#">Home</a></li></Link>
                    <Link to="/movie"><li><a href="#">Movies</a></li></Link>
                    <Link to="/serie"><li><a href="#">Serie</a></li></Link>
                    <Link to="/test"><li><a href="#">Test</a></li></Link>
                    {/* <Link to="/nba"><li><a href="#">Basket-Ball</a></li></Link>
                    <Link to="/fifa"><li><a href="#">Soccer</a></li></Link> */}
                    <Link to="/profil"><li><a href="#">Profil</a></li></Link>
                    <Link to="/setting"><li><a href="#">Settings</a></li></Link>
                </ul>

                <Link to="/search"><button class="search">search</button></Link>
            </nav>
        </div>
    );
}