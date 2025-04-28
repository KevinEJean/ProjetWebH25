import { useNavigate } from "react-router-dom";

export default function submitRules(username, email, password) {

    var rules = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var emailRules = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

    if (rules.test(username)) {
        return false;
    }

    if (emailRules.test(email)) {
        return true;
    }

    if (rules.test(password)) {
        return false;
    }

    if (!rules.test(username) && !emailRules.test(email) && !rules.test(password) && email.includes('@') && email.includes('.')) {
        return true;
    } else {
        return false;
    }

}

import axios from "axios";
export function handleLogOut() {
    // const navigate = useNavigate()

    // code pour déconnecter le user
    // isLoggedIn
    sessionStorage.setItem("onlineStatus", false)
    axios.put(`http://localhost:8080/connection/logout/${sessionStorage.getItem("id")}`);
    window.location = "/logIn";
}

export function isLoggedIn() {
    const navigate = useNavigate()

    if (sessionStorage.getItem("OnlineStatus") == "true") {
        // get client par son id, car id est plus sécuritaire que d'afficher son username
        axios.put(`http://localhost:8080/connection/logout/${sessionStorage.getItem("id")}}`);
        // afficher les données
    } else {
        window.location = "logIn";
    }
}