import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
    //État initial
    const [movies, setMovies] = useState([
        {
            title: "Sniper: The last stand",
            description: "Un film d'action",
            posterUrl: "https://filmoflix.ad/film/action/20948-sniper-the-last-stand.html",
            rating: 4.5
        }
    ]);

    // Fonction d'ajout d'un film
    const handleAddMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Ma Bibliothèque de Films</h1>
            <AddMovie onAddMovie={handleAddMovie} />
            <MovieList movies={movies} />
        </Container>
    );
}

export default App;