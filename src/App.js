// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import { useAuth } from './components/AuthContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="App-header">
      <nav className='nav__bar'>
        <ul className='links'>
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li><Link to="/Products" className="nav__link">Products</Link></li>
          <li><Link to="/Login" className="nav__link">Login</Link></li>
          <li>{user && <span className="username">{user.username}</span>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default App;



