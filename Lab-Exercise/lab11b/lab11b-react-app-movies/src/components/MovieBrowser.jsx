
import Header from './Header'
import MovieList from './MovieList'

import { useState,useEffect } from 'react';
import {movieData}  from "../../movie-data.js"; // Importing the data

const MovieBrowser= (props) => {
    
    // initially the companies array will be empty
    const [movies, setMovies] = useState(movieData);
    const [favorites, setFavorites] = useState([]);


    const addToFavorites = (id) =>{
        
        const sel = movies.find(c => c.id == id);

        if(favorites.length <= 0 || !favorites.find(c => c.id == sel.id)){
             // Create a new array with existing favorites and the selected movie
            const newFavorites = [...favorites, sel];
            
            
            setFavorites(newFavorites)
        }
        console.log(favorites)
      
    }

    return (
        <main className="section">
            <article className="container">
                <Header fav={favorites} />
                <MovieList data={movies} changeMovie={addToFavorites}/>
            </article>
        </main>
    )
}

export default MovieBrowser;
