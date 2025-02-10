import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import MovieCard from './MovieCard';

// Gestion de la liste des films et filtrage

function MovieList() {
    const [movies, setMovies] = useState([
    {
        title: "Sniper: The last stand",
        description: "Un film d'action",
        posterUrl: "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/23/2d382392fa14f2c579d2cae6a6ff9615_300x442.jpg?t=1737576159",
        rating: 4.5
    },
    {
        title: "A contre-sens",
        description: "Drame, Romance.",
        posterUrl: "https://fr.web.img2.acsta.net/c_300_300/pictures/23/04/05/17/17/4725967.jpg",
        rating: 3
    },
    {
        title: "Interstellar",
        description: "Un voyage fascinant à travers l'espace et le temps.",
        posterUrl: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg",
        rating: 4.8
    },
    ]);

    // les filtres
    const [filter, setFilter] = useState({
        title: '',
        minRating: 0
    });

    // Filtrage des films avec critères
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        movie.rating >= filter.minRating
    );

    return (
        <Container>
            <Row className="mb-4">
                <Col>
                    <Form.Control 
                        type="text" 
                        placeholder="Filtrer par titre"
                        onChange={(e) => setFilter({...filter, title: e.target.value})}
                    />
                </Col>
                <Col>
                    <Form.Control 
                        type="number" 
                        placeholder="Note minimum"
                        onChange={(e) => setFilter({...filter, minRating: e.target.value})}
                    />
                </Col>
            </Row>
            <Row>
                {filteredMovies.map((movie, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MovieList;