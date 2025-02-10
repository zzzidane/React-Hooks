import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function AddMovie({ onAddMovie }) {
    // Affichage
    const [show, setShow] = useState(false);

    // État pour le nouveau film
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterUrl: '',
        rating: ''
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie(newMovie);
        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ajouter un film
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un film</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Titre</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                required
                                onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>URL de l'affiche</Form.Label>
                            <Form.Control 
                                type="text"
                                onChange={(e) => setNewMovie({...newMovie, posterUrl: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Note</Form.Label>
                            <Form.Control 
                                type="number" 
                                min="0" 
                                max="5" 
                                step="0.1"
                                required
                                onChange={(e) => setNewMovie({...newMovie, rating: parseFloat(e.target.value)})}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ajouter
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddMovie;