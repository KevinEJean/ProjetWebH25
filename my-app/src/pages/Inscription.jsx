import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Inscription = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerif, setPasswordVerif] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (passwordVerif === password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Inscription réussie!');
            navigate('/home')
        } else {
            alert('Les mots de passe match pas');
        }
    };

    return (
        <div style={{border: "1px solid black", borderRadius: "5px", width: "300px", textAlign: "center", margin: "auto", marginTop: "200px", backgroundColor: "lightgrey"}}>
            <h2>INSCRIPTION</h2>
            <input
                style={{marginTop: "10px", color: "grey", borderRadius: "5px"}}
                type="text"
                placeholder="Entrer votre nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <input
                style={{marginTop: "10px", color: "grey", borderRadius: "5px"}}
                type="password"
                placeholder="Entrer votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <input
                style={{marginTop: "10px", color: "grey", borderRadius: "5px"}}
                type="passwordVerif"
                placeholder="Confirmer votre mots de passe"
                value={passwordVerif}
                onChange={(e) => setPasswordVerif(e.target.value)}
                />
            <br/>
            <button onClick={handleLogin} style={{marginTop: "10px", marginBottom: "10px", backgroundColor: "seagreen", color: "white", borderRadius: "5px"}}>S'inscrire</button>
        </div>
    );
};

export default Inscription;