import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const ItemForm = () => {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/items/', { name, note, author: 1 })
            .then(response => console.log('Item added:', response))
            .catch(error => console.error('Error:', error));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group controlId="formNote">
                <Form.Label>Note</Form.Label>
                <Form.Control 
                    as="textarea" 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Button variant="primary" type="submit">Add Item</Button>
        </Form>
    );
};

export default ItemForm;
