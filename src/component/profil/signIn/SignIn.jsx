import React from "react";
import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {

    function save() {
        // postMapping(/user/add)
    }

    return(
        <div className="form-grid-signIn">
            <h1>SIGN IN</h1>
            <form>
                <h4>Username</h4>
                <input type="text" id="username"/>
                <p className="info-text">cannot be changed later</p>
                <h4>Password</h4>
                <input type="password" id="passwd"/>
                <p className="info-text">1-18 charachters & no special charachters</p>
            </form>
            <form>
                <h4>Email</h4>
                <input type="text" id="email"/>
                <p className="info-text">contain '@' and '.'</p>
                <h4>Confirm Password</h4>
                <input type="password" id="passwdVerif"/>
            </form>
            <Link to={"/logIn"}><p style={{textAlign: "left"}}>Already have an account?</p></Link>
            <div>
                <button onClick={save()} style={{color: "green", marginRight: "10px"}}>Sign In</button>
                <Link to={"/"}><button style={{color: "red"}}>Cancel</button></Link>
            </div>
        </div>
    )
}