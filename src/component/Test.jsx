import React from 'react';
import movieAvatar from "/src/assets/avatar.png"

function Test() {
    return (
        <div>
            <figure style={{position: "relative", display: "inline-block"}}>
            <img src={movieAvatar} alt="Description de l'image" style={{width: "100%", height: "auto"}}/>
            <figcaption style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "24px"}}>
                Texte par-dessus l'image
            </figcaption> 
            </figure>
        </div>
    );
}

export default Test;