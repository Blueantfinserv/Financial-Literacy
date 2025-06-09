import React from "react";
import "./hero.scss";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span className="black-text1">Financial Literacy </span>
          <span className="red-text1">Summit 2025</span>
        </h1>
        <p>
          Empowering the next generation with essential financial knowledge and
          skills for a brighter, more secure future.
        </p>

        <div className="hero-cards">
          <div className="info-card">
            <Calendar className="icon red" />
            <div>
              <h4>June 13–14, 2025</h4>
              <p>Two Full Days</p>
            </div>
          </div>
          <div className="info-card">
            <MapPin className="icon blue" />
            <div>
              <h4>Grand Convention Center</h4>
              <p>Downtown Location</p>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <button
  className="btn outline-btn"
  onClick={() => {
    const speakerSection = document.getElementById("speakers");
    if (speakerSection) {
      speakerSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  View Speakers
</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
