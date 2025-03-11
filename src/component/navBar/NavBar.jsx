import 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <div className='nav-grid'>
            
            <Link to="/"><button>Home</button></Link>

            <span class="material-symbols-outlined">
                <Link to="/search"><button>Search</button></Link>
            </span>
            <span class="material-symbols-outlined">
                <Link to="/movies"><button>movies</button></Link>
            </span>
        </div>
    );
}