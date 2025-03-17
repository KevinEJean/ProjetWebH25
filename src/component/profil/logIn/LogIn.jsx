import React from "react";
import { Link } from 'react-router-dom';
import './LogIn.css';

export default function LogIn() {

    function login() {
        // login user
        location.href = 'profil';
    }

    return(
        <div className="form-grid-logIn">
            <h1>LOG IN</h1>
            <form>
                <h4>Username</h4>
                <input type="text" id="usernameLogIn"/>
                <h4>Password</h4>
                <input type="password" id="passwd"/>
                <Link to={"/forgotPassword"}><p className="info">reset password?</p></Link>
            </form>
            <Link to={"/signIn"}><p>Don't have an account?</p></Link>
            <div>
                <button onClick={(e) => login()} style={{color: "green", marginRight: "10px"}}>Log In</button>
                <Link to={"/"}><button style={{color: "red"}}>Cancel</button></Link>
            </div>
        </div>
    )
}