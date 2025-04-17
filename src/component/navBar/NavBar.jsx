import 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { GrHomeRounded } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { FaTv } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";


import logo from "../../assets/logo.png";

// régler le problème du a in LINK
export default function NavBar() {
    return (
        <div className='nav-grid'>
            <nav>
                <a href="#" style={{color: localStorage.getItem("Title-Colors")}}>LOGO</a>
                {/* <img src={logo} alt="logo" width={100} style={{borderRadius:"50%"}} /> */}

                <ul className="list">
                    <Link to="/" title='Home'><li><GrHomeRounded style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/movie" title='Movie'><li><MdMovieCreation style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/serie" title='Serie'><li><FaTv style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/favorit" title='favorit'><li><CiBookmark style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/profil" title='profil'><li><CgProfile style={{fontSize:"20px"}}/></li></Link>
                    <Link to="/setting" title='setting'><li><IoMdSettings style={{fontSize:"20px"}}/></li></Link>
                </ul>
                <Link to="/search"><button className="search">search</button></Link>
            </nav>
        </div>
    );
}