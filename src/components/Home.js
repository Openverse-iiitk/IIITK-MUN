import React from 'react';
import './Home.css';

function Home() {
  const handleRegisterClick = () => {
    window.location.href = 'https://makemypass.com/mun';
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to IIITK MUN</h1>
        <p className="hero-subtitle">Biggest Mun in Kottayam</p>
        <button className="hero-button" onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
}

export default Home;