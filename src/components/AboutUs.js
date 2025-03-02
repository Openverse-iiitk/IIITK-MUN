import React from 'react';
import './AboutUs.css';
import TeamMember1 from './pur.jpeg'; // Update the path to your image
import TeamMember2 from './sad.jpeg'; // Update the path to your image
import TeamMember3 from './yes.jpeg'; // Update the path to your image
import TeamMember4 from './nan.jpeg'; // Update the path to your image
import TeamMember5 from './man.jpeg'; 
function AboutUs() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h2>About IIITK MUN</h2>
        <p>
          We are a passionate team committed to delivering a dynamic and inspiring Model United Nations experience.
          Our diverse expertise drives innovation, creativity, and excellence at every stage.
        </p>
      </header>
      <section className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          <div className="team-card">
            <img src={TeamMember1} alt="Team Member 1" />
            <h4>Purandhar</h4>
            <p>Secretary</p>
          </div>
          <div className="team-card">
            <img src={TeamMember2} alt="Team Member 2" />
            <h4>Sadhana</h4>
            <p>Organiser</p>
          </div>
          <div className="team-card">
            <img src={TeamMember3} alt="Team Member 3" />
            <h4>Yeshwanth</h4>
            <p>Lead Secretary</p>
          </div>
          <div className="team-card">
            <img src={TeamMember5} alt="Team Member 3" />
            <h4>Manvith</h4>
            <p>"Mun"</p>
          </div>
          <div className="team-card">
            <img src={TeamMember4} alt="Team Member 4" />
            <h4>Nandana</h4>
            <p>volunteer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;