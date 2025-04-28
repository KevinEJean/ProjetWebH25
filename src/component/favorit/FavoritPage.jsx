import React from "react";

import "./FavoritPage.css"
import useDetailMovie from "../detailMovie/useDetailMovie";
import DetailMovie from "../detailMovie/DetailMovie";

// donné sera envoyé depuis la bd 
export default function FavoritPage() {
    
    const {favorit} = DetailMovie()

    console.log(favorit)
    return (
        <>
            <h1>Favorit</h1>
        
        </>
    )
}