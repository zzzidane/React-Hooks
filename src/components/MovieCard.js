import React from 'react';
import { Card, Button } from 'react-bootstrap';

// Affiche du film individeul 

function MovieCard({ movie }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button variant="primary">Note: {movie.rating}</Button>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;