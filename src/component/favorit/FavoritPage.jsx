import React, { useEffect, useState } from "react";
import "./FavoritPage.css"
import MovieCard from "../movieCard/MovieCard";
import Aquaman from "/src/assets/aquaman.jpg"
import axios from "axios";
import Carousel1 from "../movieCard/carousel/Carousel1";
import useUtils from "../utils/useUtils";

// donné sera envoyé depuis la bd 
export default function FavoritPage() {
    const [favorit, setFavorit] = useState([])    
    useEffect(() => {
        axios.get(`http://localhost:8080/favoriteList/getByListId/${sessionStorage.getItem("id")}`)
          .then(response => {
            setFavorit(response.data); // en supposant que la réponse est un tableau de films favoris
          })
          .catch(error => {
            console.error("Il y a eu une erreur lors de la récupération des films favoris !", error);
          });
      }, []);

    const {handleDetail} = useUtils();
      

    console.log(favorit)
    return (
        <div className="favorit-container">
            <h1 style={{fontWeight:"900", color:"white",fontSize:"60px"}}>Favorit</h1>
            
            <div className="favorit-content">
            {
                favorit && 
                // favorit.type == "movie" &&
                favorit.map((movie) => (
                    <div>
                        <div onClick={() => handleDetail(movie.type, movie.movieApiId   , movie.titre) }>
                            <MovieCard url={`https://image.tmdb.org/t/p/original/${movie.imageUrl}`} title={movie.titre} />
                        </div>
                        {/* ajouter la fonction du delete */}
                        <button>delete</button>

                    </div>
                ))

            } 
        </div>
        </div>
    )
}