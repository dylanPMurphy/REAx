import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users/')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default UserList;
