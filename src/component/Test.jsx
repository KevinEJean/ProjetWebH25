import 'react';
import './Test.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

const API_KEY = "a34708ad"; 
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Test() {
    const [movies, setMovies] = useState([]);


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
      
        setMovies(data.Search);
      }

      useEffect(() => {
        searchMovies('black');
      }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th scope="col">Titre</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Années</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        movies.map((data,key) => (
                            <tr key={key}>
                                <td>{data.Title}</td>
                                <td>{data.Post}</td>
                                <td>{data.Year}</td>
                            </tr> 
                        ))
                    }
                </tbody>
            </table>       
        </div>
    );
}

export default Test;
