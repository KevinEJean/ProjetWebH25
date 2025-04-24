import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import submitRules from '../UseConnection';
import './SignUp.css';
import axios from "axios";

export default function SignUp() { 

    const [show, setShow] = useState(false);
    const [user, setUser] = useState({username: "", email: "", password: ""})
    const navigate = useNavigate()
    
    var canSubmit = false;


    // change les valeur de user avec onchange
    const handleChange = (e) => {
        // var currentValue = (e.target.value); // lie la valeur de chaque input
        // canSubmit = submitRules(currentValue, e.target.id); // si sa retourne true => utilisateur peut submit
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleNewUser = async () => {
        // e.prevenDefault()
        const passwordVerif = document.getElementById("passwordVerif").value;

        if (user.password.length >= 5 && user.password.length <= 16) {
            if (user.password === passwordVerif) {
                const response = await axios.post("http://localhost:8888/client/add", user);
                if (response.data) {
                    navigate("/profil");
                    console.log("request true")
                } else{
                    console.log("request false")
                }
            } else {
                console.log("password mismatching")
            }
        } else {
            console.log("the password must be between 5 and 16 charactere")
        }

        // try {
        //     const response = await axios.post("http://localhost:8888/client/add", user);
        //     if (response.data) {
        //         navigate("/profil");
        //         console.log("request true")
        //     } else{
        //         console.log("request false")
        //     }
        // } catch (err) {
        //     console.error("signUp failed", err);
        // }
    } 

    

    // function signin() {
    //     const username = document.getElementById("username").value;
    //     const email = document.getElementById("email").value;
    //     const password = document.getElementById("password").value;
    //     const passwordVerif = document.getElementById("passwordVerif").value;

    //     if (canSubmit && password === passwordVerif) {
    //         fetch("http://localhost:8080/connection/signin", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(email, username, password)

    //         }).then((response) => {
    //             console.log(response);
    //         })
    //     } else {
    //         console.log("CANNOT SUBMIT, CHECK SYNTAX !");
    //     }
    // }


    // console.log(user)

    return (
        <div className="form-grid-signIn">
            <h1 style={{ color: localStorage.getItem("Title-Colors") }}>SIGN IN</h1>
            <form>

                <h4>Username</h4>
                <input type="text" name="username" placeholder="playerOne" required onChange={(e) => handleChange(e)} />
                <p className="info-text">cannot be changed later</p>
                <h4>
                    Password
                    <span onClick={(event) => setShow(s => !s)} className="material-symbols-outlined show_icon">
                        visibility
                    </span>
                </h4>
                <input type={show ? "text" : "password"} name="password" min={5} onChange={(e) => handleChange(e)} />
                <p className="info-text">5-16 charachters & no special charachters</p>
            </form>
            <form>
                <h4>Email</h4>
                <input type="text" name="email" onChange={(e) => handleChange(e)} />
                <p className="info-text">exemple : test@gmail.com</p>
                <h4>Confirm Password</h4>
                <input type={show ? "text" : "password"} id="passwordVerif" onChange={(e) => handleChange(e)} />
            </form>
            <Link to={"/logIn"}><p style={{ textAlign: "left" }}>Already have an account?</p></Link>
            <div>
                <button style={{ color: "green", marginRight: "10px" }} onClick={handleNewUser}>Sign In</button>
                <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
            </div>
        </div>
    )
}