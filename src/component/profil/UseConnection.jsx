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

    // test() retourne s'il y a un match entre les deux valeurs donc : 
    // true = match 
    // false = no match
}

export function handleLogOut() {
    // code pour déconnecter le user
    window.location = "logIn";
}

export function isLoggedIn() {
    if (localStorage.getItem("OnlineStatus") === "true") {
        // get client par son id, car id est plus sécuritaire que d'afficher son username
        axios.get(`http://localhost:8080/client/getById/${sessionStorage.getItem("id")}}`);
        // afficher les données
    } else {
        window.location.href = "/logIn";
    }
}