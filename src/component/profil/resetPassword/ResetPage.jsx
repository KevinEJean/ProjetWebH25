import React from "react";
import { Link } from "react-router-dom";
import './ResetPage.css';

export default function ResetPassword() {

    function passwordReset() {
        // if passwd.value.contains = @!#$%?&*()_+=-:¨,'.""<>/|\ 
            // alert("Password can only contain 18 letters including numbers or an '_' or an '-' !")
        //else update password
    }

    return (
        <div className="form-grid-1x2">
            <h1>PASSWORD RESET</h1>
            <p className="info-text">Can only contain an underscore ( _ ) and be up to 18 letters or numbers</p>
            <form className="form">
                <h4>Password</h4>
                <input type="text" id="passwd"/>
                <h4>Confirm Password</h4>
                <input type="password" id="passwd"/>
            </form>
            <div>
                <button onClick={(e) => passwordReset()} style={{ color: "green", marginRight: "10px" }}>Confirm</button>
                <Link to={"/"}><button style={{ color: "red" }}>Cancel</button></Link>
            </div>
        </div>
    )
}