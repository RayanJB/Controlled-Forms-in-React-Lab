// src/App.jsx
import './App.css';
import { useState } from "react"
import Bookshelf from './components/bookshelf/Bookshelf';
const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;