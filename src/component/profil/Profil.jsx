import React from "react";
import { Link } from "react-router-dom";
import addAvatar from "./signIn/SignIn";
import "./Profil.css";

export default function Profil() {

    function isLoggedIn() {
        // check si user est connecter
            // if true afficher info du user (read only)
                // getMapping(/user/byId)
                    // input.value = fname, etc
            // else to LogIn
    }

    function handleLogOut() {
        // code pour déconnecter le user
    }

    function allowUpdate() {
        // change this.button to 'save' button
            // then onClick (this.button) revert to update.button
                // then getMapping (refresh page)
    }

    return(
        <div className="form-grid">
            <span class="material-symbols-outlined avatar">
                account_circle
            </span>
            <form>
                <h4>First Name</h4>
                <input type="text" id="fname" readOnly/>
                <h4>Email</h4>
                <input type="text" id="email" readOnly/>
                <h4>Password</h4>
                <input type="password" id="passwd" readOnly/>
            </form>
            <form>
                <h4>Last Name</h4>
                <input type="text" id="lname" readOnly/>
                <h4>Adress</h4>
                <input type="text" id="address" readOnly/>
                <h4>Confirm Password</h4>
                <input type="password" id="passwdVerif" readOnly/>
            </form>
            <p onClick={addAvatar()}>change picture?</p>
            <p onClick={handleLogOut()} style={{textAlign: "left"}}>log out</p>
            <div>
                <button onClick={allowUpdate()} style={{color: "grey"}}>Update</button>
                <Link to={"/"}><button style={{color: "red"}}>Cancel</button></Link>
            </div>
        </div>
    )
}