import React from "react";
import { Link } from 'react-router-dom';
import './LogIn.css';

export default function LogIn() {

    function addAvatar() {
        // code pour ajouter un avatar
    }

    function save() {
        // postMapping(/user/add)
    }

    return(
        <div className="form-grid-logIn">
            <form>
                <h4>Email</h4>
                <input type="text" id="passwd"/>
                <h4>Password</h4>
                <input type="password" id="passwd"/>
            </form>
            <Link to={"/signIn"}><p>Don't have an account?</p></Link>
            <div>
                <button onClick={save()} style={{color: "green"}}>Log In</button>
                <Link to={"/"}><button style={{color: "red"}}>Cancel</button></Link>
            </div>
        </div>
    )
}