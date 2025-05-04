
export default function submitRules(username, email, password) {

    var rules = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var emailRules = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

    if (rules.test(username)) {
        return false;
    }

    if (emailRules.test(email)) {
        return false;
    }

    if (rules.test(password)) {
        return false;
    }

    if (!rules.test(username) && !rules.test(password) && password.length <= 16 && password.length >= 5 && !emailRules.test(email) && email.includes('@') && email.includes('.')) {
        return true;
    } else {
        return false;
    }

}

import axios from "axios";

export function handleLogOut() {

    // code pour déconnecter le user
    sessionStorage.setItem("onlineStatus", false)
    axios.put(`http://localhost:8080/connection/logout/${sessionStorage.getItem("id")}`)
        .then(() => {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("onlineStatus");
            window.location = "/logIn";
        }).catch((error) => console.log(error));
}