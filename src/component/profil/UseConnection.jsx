
export default function submitRules(username, email, password) {

    var rules = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var emailRules = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

    if (rules.test(username)) {
        console.log("username error!");
        return false;
    }

    if (emailRules.test(email)) {
        console.log("email error!");
        return false;
    }

    if (rules.test(password)) {
        console.log("password error!");
        return false;
    }

    if (!rules.test(username) && !rules.test(password) && password.length <= 16 && password.length >= 5 && !emailRules.test(email) && email.includes('@') && email.includes('.')) {
        if (username === "admin" || username.includes("del-user")) {
            console.log("email @ and . error");
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }

}

import axios from "axios";

export function handleLogOut() {
    axios.put(`http://localhost:8080/connection/logout/${sessionStorage.getItem("id")}`)
        .then(() => {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("onlineStatus");
            window.location = "/login";
        }).catch((error) => console.log(error));
}