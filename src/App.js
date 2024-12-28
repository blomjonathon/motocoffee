import React from 'react';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="logo">Moto Coffee Shop</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Moto Coffee Shop. All Rights Reserved.</p>
    </footer>
  );
}

export default App;
