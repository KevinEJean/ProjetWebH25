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
import { BiBasketball } from "react-icons/bi";
import logo from "../../assets/logo.png";

// régler le problème du a in LINK
export default function NavBar() {
    const navigate = useNavigate()
    
    function handleProfilRedirection() {
        if (sessionStorage.getItem("onlineStatus") == "true") {
            navigate("/profil")
        } else {
            alert("You must login first")
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
                {/* <img src={logo} alt="logo" width={100} style={{borderRadius:"50%"}} /> */}

                <ul className="list">
                    <Link to="/" title='Home'><li><GrHomeRounded style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/movie" title='Movie'><li><MdMovieCreation style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/serie" title='Serie'><li><FaTv style={{fontSize:"20px"}}/></li></Link>
                    <li title='favorit' onClick={handleFavoritRedirection}><CiBookmark style={{fontSize:"20px"}}/></li>
                    {/* <Link to="/nba" title='NBA'><li><BiBasketball style={{fontSize:"20px"}}/></li></Link> */}
                    {/* <Link to="/fifa" title='FIFA'><li><PiSoccerBallFill style={{fontSize:"20px"}}/></li></Link> */}
                    <li title="profil" onClick={handleProfilRedirection}><CgProfile style={{fontSize:"20px"}}/></li>
                    {/* <Link to="/profil" title='Profil'><li><CgProfile style={{fontSize:"20px"}}/></li></Link> */}
                    <Link to="/setting" title='Setting'><li><IoMdSettings style={{fontSize:"20px"}}/></li></Link>
                </ul>
                <Link to="/search" title='Search'><button className="search">search</button></Link>
            </nav>
        </div>
    );
}
