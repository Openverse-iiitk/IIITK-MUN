// src/components/Guide.js
import React from 'react';
import './Guide.css';

function Guide() {
  return (
    <div className="guide-page">
      <h2 className="guide-title">Your Ultimate Guide to IIITK MUN</h2>
      <p className="guide-intro">
        Prepare yourself for an extraordinary Model United Nations experience.
        Our guide covers essential tips, strategies, and resources to help you excel.
      </p>
      <ul className="guide-list">
        <li>Understand the agenda and historical context</li>
        <li>Master research and preparation techniques</li>
        <li>Enhance your public speaking and negotiation skills</li>
        <li>Learn effective networking strategies</li>
        <li>Develop winning debate tactics</li>
      </ul>
      <div className="guide-action">
        <a
          href="https://drive.google.com/file/d/1tvWEIGPalsYjexDgPamAp24ZaZTnSRxv/view"
          target="_blank"
          rel="noopener noreferrer"
          className="modern-button"
        >
          Download the Guide
        </a>
      </div>
    </div>
  );
}

export default Guide;
