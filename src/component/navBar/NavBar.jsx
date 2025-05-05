import 'react'
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { GrHomeRounded } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { FaTv } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import { PiSoccerBallFill } from "react-icons/pi";
import logo from "../../assets/logo.png";

export default function NavBar() {
    const navigate = useNavigate()
    
    function handleProfilRedirection() {
        if (sessionStorage.getItem("onlineStatus") == "true") {
            navigate("/profil")
        } else {
            navigate("/login")
        }
    }
    function handleFavoritRedirection() {
        if (sessionStorage.getItem("onlineStatus") == "true") {
            navigate("/favorit")
        } else {
            alert("You must login first")
            navigate("/login")
        }
    }

    return (
        <div className='nav-grid'>
            <nav>
                <a href="#" style={{color: localStorage.getItem("Title-Colors")}}>LOGO</a>

                <ul className="list">
                    <Link to="/" title='Home' name='home-page'><li><GrHomeRounded style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/movie" title='Movie' name='movie-page'><li><MdMovieCreation style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/serie" title='Serie' name='serie-page'><li><FaTv style={{fontSize:"20px"}}/></li></Link>
                    <li title='favorit' name='favorit-page' onClick={handleFavoritRedirection}><CiBookmark style={{fontSize:"20px"}}/></li>
                    <Link to="/fifa" title='FIFA' name='sports-page'><li><PiSoccerBallFill style={{fontSize:"20px"}}/></li></Link>
                    <li title="profil" name='profil-page' onClick={handleProfilRedirection}><CgProfile style={{fontSize:"20px"}}/></li>
                    <Link to="/setting" title='Setting' name='settings-page'><li><IoMdSettings style={{fontSize:"20px"}}/></li></Link>
                </ul>
                <Link to="/search" title='Search'><button className="search">search</button></Link>
            </nav>
        </div>
    );
}
