import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/api/items/')
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date Modified</th>
                    <th>Note</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{new Date(item.date_modified).toLocaleString()}</td>
                        <td>{item.note}</td>
                        <td>{item.author}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ItemList;