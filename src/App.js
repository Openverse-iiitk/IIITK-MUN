import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import Guide from './components/Guide';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import NeonLine from './components/NeonLine';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Splash screen lasts 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <NeonLine />
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
    </Router>
  );
}

export default App;