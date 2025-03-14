import React from "react";
import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {

    function addAvatar() {
        // code pour ajouter un avatar
    }

    function save() {
        // postMapping(/user/add)
    }

    return(
        <div className="form-grid-signIn">
            <form>
                <h4>Username</h4>
                <input type="text" id="username"/>
                <h4>Password</h4>
                <input type="password" id="passwd"/>
            </form>
            <form>
                <h4>Email</h4>
                <input type="text" id="email"/>
                <h4>Confirm Password</h4>
                <input type="password" id="passwdVerif"/>
            </form>
            <Link to={"/logIn"}><p style={{textAlign: "left"}}>Already have an account?</p></Link>
            <div>
                <button onClick={save()} style={{color: "green"}}>Sign In</button>
                <Link to={"/"}><button style={{color: "red"}}>Cancel</button></Link>
            </div>
        </div>
    )
}