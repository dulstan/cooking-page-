import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home/Home';
import Recipe from '../components/Recipe/Recipe';
import About from '../components/About/About';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <img className='logo' src="./helper/image/logotyp.jpg" alt="en bild på vårt logo som uppstår av en kastrull med flygande grönsaker ovanpå och en stekspade "/>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/recept">Recept</Link>
            </li>
            <li>
              <Link to="/about">Om Oss</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recept" element={<Recipe />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;