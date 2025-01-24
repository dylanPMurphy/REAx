import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="container mt-4">
      <h1>Item List</h1>
      <ItemList />
    </div>
  );
}

export default App;