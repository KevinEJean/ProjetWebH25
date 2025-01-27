import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Nav.css'


const Navbar = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    setIsLoggedIn(false);

    return (
        <div style={{border: "1px solid black", borderRadius: "5px", width: "300px", textAlign: "center", backgroundColor: "lightgrey", margin: "auto", marginTop: "200px"}}>
            <h2>Bienvenue !</h2>
            <button id='home' onClick={() => navigate('/home')} >Home</button>
            <button id='login' onClick={() => navigate('/inscription')} >Inscription</button>
            <button id='users' onClick={() => navigate('/users')} >Users</button>
            <button id='error' onClick={() => navigate('/error')} >Error</button>
        </div>
    );
}

export default Navbar;  