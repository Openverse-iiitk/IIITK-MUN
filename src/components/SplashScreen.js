import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen({ onFinish }) {
  const [split, setSplit] = useState(false);
  const [pixelate, setPixelate] = useState(false);

  useEffect(() => {
    // Trigger the split (line splitting animation) after 3.5 seconds
    const splitTimer = setTimeout(() => {
      setSplit(true);
    }, 3500);

    // Trigger pixelation effect after 10 seconds
    const pixelateTimer = setTimeout(() => {
      setPixelate(true);
    }, 10000);

    // End splash screen after 15 seconds total
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 15000);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(pixelateTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className={`pixelate-container ${pixelate ? 'pixelate' : ''}`}>
        <h1 className="splash-text">IIITK MUN</h1>
        <div className={`splash-line ${split ? 'split' : ''}`}></div>
      </div>
    </div>
  );
}

export default SplashScreen;