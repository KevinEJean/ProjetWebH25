import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {

    const [show, setShow] = useState();

    function save() {
        // postMapping(/user/add)
        location.href = 'logIn';
    }

    return(
        <div className="form-grid-signIn">
            <h1 style={{color: localStorage.getItem("Title-Colors")}}>SIGN IN</h1>
            <form>
                <h4>Username</h4>
                <input type="text" id="username" placeholder="myUser-Name_"/>
                <p className="info-text">cannot be changed later</p>
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} class="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} id="passwd"/>
                <p className="info-text">5-16 charachters & no special charachters</p>
            </form>
            <form>
                <h4>Email</h4>
                <input type="text" id="email"/>
                <p className="info-text">exemple : test@gmail.com</p>
                <h4>Confirm Password</h4>
                <input type={show ? "text" : "password"} id="passwdVerif"/>
            </form>
            <Link to={"/logIn"}><p style={{textAlign: "left"}}>Already have an account?</p></Link>
            <div>
                <button onClick={(e) => save()} style={{color: "green", marginRight: "10px"}}>Sign In</button>
                <Link to={"/"}><button style={{color: "red"}}>Cancel</button></Link>
            </div>
        </div>
    )
}