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

export function isLoggedIn(user) {
    // const navigate = useNavigate()

    if (sessionStorage.getItem("onlineStatus") == "true") {
        async function getUserInfo() {
            try {
                const response = await axios.get(`http://localhost:8080/client/getById/${sessionStorage.getItem("id")}`)
                user.email = response.data.email;
                user.password = response.data.password;
                if (response.data.fname != null && response.data.lname != null) {
                    user.fname = response.data.fname;
                    user.lname = response.data.lname;
                }
            } catch (error) {
                return error;
            }
        }
        return getUserInfo();
    } else {
        window.location = "logIn";
    }
}