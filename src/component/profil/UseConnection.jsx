import { data, useNavigate } from "react-router-dom";

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
    sessionStorage.setItem("onlineStatus", false)
    axios.put(`http://localhost:8080/connection/logout/${sessionStorage.getItem("id")}`)
    .then(() => {
        sessionStorage.setItem("onlineStatus", false)
        window.location = "/logIn";
    }).catch((error) => console.log(error));
}

export function isLoggedIn() {
    // const navigate = useNavigate()

    // if (sessionStorage.getItem("onlineStatus") == "true") {
    //     // fonctionne pas
    //     async function getUserInfo() {
    //         axios.get(`http://localhost:8080/client/getById/${sessionStorage.getItem("id")}`)
    //         .then((response) => {
    //             return response.data;
    //         })
    //     }
    //     return getUserInfo();
    // } else {
    //     window.location = "logIn";
    // }
}