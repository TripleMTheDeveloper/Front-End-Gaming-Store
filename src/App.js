import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import About from './components/About';
import { AuthProvider, useAuth } from './components/AuthContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="App-header">
      <nav className='nav__bar'>
        <button>TripleM</button>
        <ul className='links'>
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li><Link to="/about" className="nav__link">About</Link></li>
          <li><Link to="/Products" className="nav__link">Products</Link></li>
          <li><Link to="/Login" className="nav__link">Login</Link></li>
          <li>{user && <span className="username">{user.username}</span>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default App;


