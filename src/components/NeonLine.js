import React from 'react';
import './NeonLine.css';

const NeonLine = () => {
  return (
    <div className="neon-line">
      <div className="particles">
        <div className="particle" style={{ left: '0%', animationDelay: '0s' }}></div>
        <div className="particle" style={{ left: '20%', animationDelay: '0.5s' }}></div>
        <div className="particle" style={{ left: '40%', animationDelay: '1s' }}></div>
        <div className="particle" style={{ left: '60%', animationDelay: '1.5s' }}></div>
        <div className="particle" style={{ left: '80%', animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default NeonLine;
