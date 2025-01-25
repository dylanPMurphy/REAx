import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
    return (
        <div className="container mt-4">
            <h1>Item Management</h1>
            <ItemForm />
            <ItemList />

            <h1 className="mt-5">User Management</h1>
            <UserForm />
            <UserList />
        </div>
    );
}

export default App;
